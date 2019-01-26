---
layout: post
title: Netbeans Project Login Page Part2
date: 2019-01-26 13:58:00 -0400
tags: [tech-blog,projects]
image: Discount.jpg

---


Video []


Source code []


PACKAGE JAVA CLASS

```
package DBConnect;

import java.sql.*;
import java.util.*;
import java.io.*;



/**
 *
 * @author Joshi
 */
public class JOConnection {
    public static Connection conn;
    public static Statement stmt;
    public static ResultSet rslt;


public static void JConnect() throws  ClassNotFoundException, SQLException {

String username ="panda"; 
String password ="piggy"; 

Class.forName("oracle.jdbc.driver.OracleDriver");
conn = DriverManager.getConnection("jdbc:oracle:thin:@Crypto-PC:1521:XE",username,password);
stmt = conn.createStatement();

}


}


```



LOGIN HTML FILE
```

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
<body>

<h2>Login Form</h2>



<div>
  
  <form class="modal-content animate" action="login.jsp">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
     
    </div>

    <div class="container">
      <label for="email"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="email" required>

      <label for="pswd"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="pswd" required>
        
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

</body>
</html>


```
LOGIN JSP FILE

NOTE : CHANGE CRYPTO PC TO YOUR BELOVED HOSTNAME (MINE WAS CRYPTO-PC ) CHANGE TO YOURS
THIS LINE ["jdbc:oracle:thin:@HOSTNAME:1521:XE","USERNAME","PASSWORD" ]

```
<%@page import="DBConnect.JOConnection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*"%>
<!DOCTYPE html>
<%
String email = request.getParameter("email");
String pswd = request.getParameter("pswd");
JOConnection.JConnect();
String selectquery = "select * from register where email='" + email + "' and pswd='" + pswd + "'";
JOConnection.rslt = JOConnection.stmt.executeQuery(selectquery);
if (JOConnection.rslt.next()) {
%>
<script>
alert("Record Found");
window.location.href="http://localhost:8084/WebApplication9/index2.html";
</script>
<%} else {%>
<script>
alert("No Record Found, Try again");
window.location.href="http://localhost:8084/WebApplication9/signup.html";
</script>
<%}%>



```


It's best viewed on desktop rather than mobile, and can be accessed [here]


