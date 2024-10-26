<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Friend Requests</title>
</head>
<body>
    <h2>Pending Friend Requests</h2>
    <div id="pendingRequests">
        <ul>
            <!-- This div will be populated dynamically by the FriendRequestServlet -->
            <% request.getRequestDispatcher("/friendRequests").include(request, response); %>
        </ul>
    </div>
    <hr>
    <h2>Send Friend Request</h2>
    <form action="sendRequest" method="post">
        <label>Send Friend Request to:</label>
        <input type="text" name="server" required><br><br>
        <button type="submit">Send Request</button>
    </form>
</body>
</html>
