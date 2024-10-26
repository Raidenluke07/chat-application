package reg;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/chat")
public class ChatServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private static final String DB_URL = "jdbc:mysql://localhost:3306/chat_app";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Raiden-8@";

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        
        String client = (String) session.getAttribute("username");
        String server = (String) session.getAttribute("chatWith");
        String message = request.getParameter("message");

        if (client == null || server == null || message == null) {
            out.println("<html><body>");
            out.println("<h1>Error: Client, server, or message is null!</h1>");
            out.println("</body></html>");
            return;
        }

        Connection con = null;
        PreparedStatement ps = null;

        try {
            con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            ps = con.prepareStatement("INSERT INTO chat_messages (sender, receiver, message) VALUES (?, ?, ?)");
            ps.setString(1, client);
            ps.setString(2, server);
            ps.setString(3, message);
            int inserted = ps.executeUpdate();

            if (inserted > 0) {
                response.sendRedirect(request.getContextPath() + "/chat.jsp");
            } else {
                out.println("<html><body>");
                out.println("<h1>Error sending message!</h1>");
                out.println("</body></html>");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            out.println("Error: " + e.getMessage());
        } finally {
            try {
                if (ps != null) ps.close();
                if (con != null) con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
