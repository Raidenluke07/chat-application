package reg;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/chat_app";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Raiden-8@";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String email = request.getParameter("email");
        int age = Integer.parseInt(request.getParameter("age"));
        String gender = request.getParameter("gender");
        String phone = request.getParameter("phone");

        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // Load MySQL JDBC driver
            con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Check if username already exists
            if (userExists(username, con)) {
                out.println("User already exists!");
            } else {
                // Insert new user into database
                if (registerUser(username, password, email, age, gender, phone, con)) {
                    out.println("User registered successfully! Please <a href='login.jsp'>login</a> to continue.");
                } else {
                    out.println("User registration failed!");
                }
            }

        } catch (ClassNotFoundException | SQLException | NumberFormatException e) {
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

    private boolean userExists(String username, Connection con) throws SQLException {
        try (PreparedStatement ps = con.prepareStatement("SELECT username FROM users WHERE username = ?")) {
            ps.setString(1, username);
            try (ResultSet rs = ps.executeQuery()) {
                return rs.next(); // Returns true if user exists
            }
        }
    }

    private boolean registerUser(String username, String password, String email, int age, String gender, String phone, Connection con) throws SQLException {
        try (PreparedStatement ps = con.prepareStatement("INSERT INTO users (username, password, email, age, gender, phone) VALUES (?, ?, ?, ?, ?, ?)")) {
            ps.setString(1, username);
            ps.setString(2, password);
            ps.setString(3, email);
            ps.setInt(4, age);
            ps.setString(5, gender);
            ps.setString(6, phone);
            int row = ps.executeUpdate();
            return row > 0;
        }
    }
}
