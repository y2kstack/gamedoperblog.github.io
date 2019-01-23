---
layout: post
title: NETBEANS OJDBC CONNECTION 
date: 2014-02-20 13:35:00 -0400
tags: [tech-blog,projects]
image: ppp-landing.jpg

---
NETBEANS OJDBC CONNECTION | ORACLE |

Video []


Source code []

HTML FILE
```
<html>
<head><title>Sign up</title>
<link rel="stylesheet" type="text/css" href="style2.css">
<link rel="stylesheet" type="text/css" href="align.css">
<script language="javascript">
function validation(Form_obj)
{
    if(Form_obj.uname.value.length==0)
    {
        alert("Please, fill up the user name!!!");

        Form_obj.uname.focus();
        return false;
    }
    if(Form_obj.pswd.value.length==0)
    {
        alert("Please, fill up the password!!!");

        Form_obj.pswd.focus();
        return false;
    }
    if(Form_obj.address.value.length==0)
    {
        alert("Please, fill up the address!!!");

        Form_obj.address.focus();
        return false;
    }
     return true;
}
</script>

</head>
<div id="sign">Sign up</div>
<center>
<form id="form" action="newjsp.jsp" method="post" name="signform" onSubmit="return validation(this)">

<table border="1">


<tr><td colspan="2" align="center">Fill your details</td></tr>
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td>UName</td><td><input type="text" name="uname"></td></tr>
<tr><td>Password</td><td><input type="text" name="pswd"></td></tr>

<tr><td colspan="2" align="center"><input type="submit" name="signbt" value="Sign up">                                 </td></tr>
</td></tr>
</table>
</form>
</center>
</html>



```
JSP FILE 

NOTE : CHANGE CRYPTO PC TO YOUR BELOVED HOSTNAME (MINE WAS CRYPTO-PC ) CHANGE TO YOURS
THIS LINE ["jdbc:oracle:thin:@HOSTNAME:1521:XE","USERNAME","PASSWORD" ]

```
<%@page language="java" import="java.sql.*"%>
<%@page import="java.io.*"%>
<%

try
{
    ResultSet rs =null;
            Class.forName("oracle.jdbc.driver.OracleDriver");
        Connection con=    DriverManager.getConnection("jdbc:oracle:thin:@Crypto-PC:1521:XE","panda","piggy");
        Statement stmt=con.createStatement();
    String uname=request.getParameter("uname");
    String pswd=request.getParameter("pswd");
    stmt.executeUpdate("insert into signin values('"+uname+"','"+pswd+"')");
        response.sendRedirect("newhtml.html");
        
    con.close();
    stmt.close(); 
}
 
catch(ClassNotFoundException e)
{
    out.println(e.getMessage());
} %>



```
<iframe width="560" height="315" src="https://www.youtube.com/embed/K7ybckF08sY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It's best viewed on desktop rather than mobile, and can be accessed [here]


