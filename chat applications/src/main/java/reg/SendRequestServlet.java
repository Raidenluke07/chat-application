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

@WebServlet("/sendRequest")
public class SendRequestServlet extends HttpServlet {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/chat_app";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Raiden-8@";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        String sender = (String) session.getAttribute("username");
        String receiver = request.getParameter("receiver");

        if (sender == null || receiver == null || sender.equals(receiver)) {
            out.println("<html><body>");
            out.println("<h1>Error sending friend request!</h1>");
            out.println("<p>Invalid sender or receiver.</p>");
            out.println("</body></html>");
            return;
        }

        Connection con = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Insert the friend request
            ps = con.prepareStatement("INSERT INTO friend_requests (sender, receiver, status) VALUES (?, ?, 'pending')");
            ps.setString(1, sender);
            ps.setString(2, receiver);
            int inserted = ps.executeUpdate();

            if (inserted > 0) {
                response.sendRedirect(request.getContextPath() + "/friendRequests");
            } else {
                out.println("<html><body>");
                out.println("<h1>Error sending friend request!</h1>");
                out.println("</body></html>");
            }

        } catch (SQLException | ClassNotFoundException e) {
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
