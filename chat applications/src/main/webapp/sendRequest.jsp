<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Send Friend Request</title>
</head>
<body>
    <h2>Send Friend Request</h2>
    <form action="sendRequest" method="post">
        <label for="server">Server Username:</label>
        <input type="text" id="server" name="server" required>
        <br>
        <button type="submit">Send Request</button>
    </form>
</body>
</html>
