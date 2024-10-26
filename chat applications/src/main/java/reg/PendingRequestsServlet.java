package reg;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/pendingRequests")
public class PendingRequestsServlet extends HttpServlet {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/chat_app";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Raiden-8@";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();

        // Get the current user
        String username = (String) session.getAttribute("username");

        // Check if the username is null
        if (username == null) {
            out.println("<html><body>");
            out.println("<h1>Error: User is not logged in!</h1>");
            out.println("</body></html>");
            return;
        }

        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Get pending friend requests for the current user
            ps = con.prepareStatement("SELECT sender FROM friend_requests WHERE receiver = ? AND status = 'pending'");
            ps.setString(1, username);
            rs = ps.executeQuery();

            List<String> pendingRequests = new ArrayList<>();

            while (rs.next()) {
                pendingRequests.add(rs.getString("sender"));
            }

            out.println("<html><body>");
            out.println("<h1>Pending Friend Requests</h1>");
            if (pendingRequests.isEmpty()) {
                out.println("<p>No pending friend requests.</p>");
            } else {
                for (String sender : pendingRequests) {
                    out.println("<p>Friend request from: " + sender + "</p>");
                }
            }
            out.println("</body></html>");

        } catch (SQLException e) {
            e.printStackTrace();
            out.println("Error: " + e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (ps != null) ps.close();
                if (con != null) con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
