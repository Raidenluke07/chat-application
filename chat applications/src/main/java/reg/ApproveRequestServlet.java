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

@WebServlet("/approveRequest")
public class ApproveRequestServlet extends HttpServlet {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/chat_app";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Raiden-8@";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        
        // Get current user (receiver) from session
        String receiver = (String) session.getAttribute("username");
        
        // Get sender from request parameter
        String sender = request.getParameter("sender");

        // Check if sender or receiver is null
        if (sender == null || receiver == null) {
            out.println("<html><body>");
            out.println("<h1>Error: Sender or receiver is null!</h1>");
            out.println("</body></html>");
            return;
        }

        Connection con = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Approve the friend request
            ps = con.prepareStatement("UPDATE friend_requests SET status = 'approved' WHERE sender = ? AND receiver = ?");
            ps.setString(1, sender);
            ps.setString(2, receiver);
            int updated = ps.executeUpdate();

            if (updated > 0) {
                session.setAttribute("username", receiver);  // Set receiver as username
                session.setAttribute("chatWith", sender);    // Set sender as chatWith
                response.sendRedirect(request.getContextPath() + "/chat.jsp");
            } else {
                out.println("<html><body>");
                out.println("<h1>Error approving friend request!</h1>");
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
