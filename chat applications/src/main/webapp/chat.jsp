<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection, java.sql.DriverManager, java.sql.PreparedStatement, java.sql.ResultSet" %>
<%@ page import="java.sql.SQLException, java.lang.ClassNotFoundException" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Chat</title>
</head>
<body>
<%
    String client = (String) session.getAttribute("username");
    String server = (String) session.getAttribute("chatWith");

    if (client == null || server == null) {
        out.println("<p>Error: Invalid session. Please log in again.</p>");
    } else {
        out.println("<h2>Chat with " + server + "</h2>");
        out.println("<form action=\"chat\" method=\"post\">");
        out.println("<label>Message:</label>");
        out.println("<input type=\"text\" name=\"message\" required><br><br>");
        out.println("<button type=\"submit\">Send</button>");
        out.println("</form>");
        out.println("<hr>");
        out.println("<h2>Chat History</h2>");
        out.println("<ul>");

        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/chat_app", "root", "Raiden-8@");

            ps = con.prepareStatement("SELECT * FROM chat_messages WHERE (sender = ? AND receiver = ?) OR (sender = ? AND receiver = ?) ORDER BY timestamp");
            ps.setString(1, client);
            ps.setString(2, server);
            ps.setString(3, server);
            ps.setString(4, client);
            rs = ps.executeQuery();

            while (rs.next()) {
                String msgSender = rs.getString("sender");
                String msgContent = rs.getString("message");
                out.println("<li><strong>" + msgSender + ":</strong> " + msgContent + "</li>");
            }

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            out.println("<p>Error: " + e.getMessage() + "</p>");
        } finally {
            try {
                if (rs != null) rs.close();
                if (ps != null) ps.close();
                if (con != null) con.close();
            } catch (SQLException e) {
                e.printStackTrace();
                out.println("<p>Error closing resources: " + e.getMessage() + "</p>");
            }
        }
        out.println("</ul>");
    }
%>
</body>
</html>
