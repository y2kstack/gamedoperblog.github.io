---
layout: post
title: ATM MACHINE MINI PROJECT
date: 2019-07-11 
tags: [projects,tech-blog]
image: QWERTY.png

---



**HERE IS THE CODE FOR ATM MACHINE PROJECT**


    ![ATM MACHINE](https://picasaweb.google.com/115889831304566128781/6712410897499504273#6712410902310546946 "iMAGE")


FORM 1 CODE :

    Private Sub cmdaccept_Click()
    If txtaccno.Text = "admin" And txtpinno.Text = "1234" Then
    Unload Me
    Form4.Show
    Exit Sub
    End If
    
    If txtaccno.Text = "" Or txtpinno.Text = "" Then
    MsgBox "sorry kindly enter the details to continue", vbCritical
    Exit Sub
    End If
    
    
    Adodc1.Refresh
    Adodc1.Recordset.MoveFirst
    While Not Adodc1.Recordset.EOF
    If txtaccno.Text = Adodc1.Recordset.Fields(0) And txtpinno.Text = Adodc1.Recordset.Fields(1) Then
    accountno = txtaccno.Text
    MDIForm1.Show
    MDIForm1.Caption = "Account NO: " & accountno
    Unload Me
    Exit Sub
    End If
    Adodc1.Recordset.MoveNext
    
    Wend
    MsgBox "sorry!!! you have provided incorrect data", vbCritical, "Joe atm"
    txtaccno.Text = ""
    txtpinno.Text = ""
    
    
    End Sub
    
    Private Sub cmdcancel_Click()
    End
    End Sub
    
    Private Sub Form_Load()
    Me.Caption = "SUBSCRIBE bank"
    txtaccno.Text = ""
    txtpinno.Text = ""
    
    
    
    End Sub


FORM 2 CODE :

    Dim newamount As Double
    
    
    Private Sub cmdaccept_Click()
    If txtamt.Text = "" Or Val(txtamt.Text) < 100 Then
    MsgBox "invalidd amount", vbCritical, "SUBSCRIBE ATM"
    txtamt.Text = ""
    Exit Sub
    End If
    
    
    Adodc1.Refresh
    While Not Adodc1.Recordset.EOF
    If Adodc1.Recordset.Fields(0) = accountno Then
    If Val(txtamt.Text) <= Val(Adodc1.Recordset.Fields(3)) Then
    newamount = Val(Adodc1.Recordset.Fields(3)) - Val(txtamt.Text)
    Adodc1.Recordset.Fields(3) = newamount
    Adodc1.Recordset.Update
    Adodc2.Refresh
    Adodc2.Recordset.AddNew
    Adodc2.Recordset.Fields(0) = accountno
    Adodc2.Recordset.Fields(1) = txtamt.Text
    Adodc2.Recordset.Fields(2) = Format(Date, "dd-mm=yyy")
    Adodc2.Recordset.Update
    MsgBox "collect your cash", vbInformation, "SUSBSCRIBE ATM"
    txtamt.Text = ""
    Exit Sub
    Else
    MsgBox "sorry insuffiencient funds", vbQuestion
    txtamt.Text = ""
    Exit Sub
    End If
    Else
        Adodc1.Recordset.MoveNext
        End If
        Wend
        txtamt.Text = ""
        End Sub
        
    
    
    
    
    Private Sub Form_Load()
    
    Me.Caption = "ACC NO:" & accountno
    txtamt.Text = ""
    txtamt.MaxLength = 5
    End Sub


FORM 3 CODE :

    Private Sub Form_Load()
    Me.Caption = "ACCOUNT NO " & accountno
    Adodc1.Refresh
    Adodc1.Recordset.MoveFirst
    While Not Adodc1.Recordset.EOF
    If accountno = Adodc1.Recordset.Fields(0) Then
    Label3.Caption = Adodc1.Recordset.Fields(3)
    Exit Sub
    End If
    Adodc1.Recordset.MoveNext
    Wend
    End Sub

FORM 4 CODE:

    Private Sub cmdadd_Click()
    'create a sub funtion
    Call clear_fields
    
    'database
    
    Adodc1.Refresh
    Adodc1.Recordset.MoveLast
    txtaccno.Text = Adodc1.Recordset(0) + 1
    
    End Sub
    
    Private Sub cmdcancel_Click()
    'sub function
    Call clear_fields
    End Sub
    
    Private Sub cmdhome_Click()
    Unload Me
    Form1.Show
    End Sub
    
    
    Private Sub cmdsave_Click()
    If txtaccno.Text = "" Or txtpinno.Text = "" Or txtname.Text = "" Or txtamt.Text = "" Then
    MsgBox "all fields are manadatory ", vbCritical, "SUBSCRIBE ATM"
    Exit Sub
    End If
    
    Adodc1.Recordset.AddNew
    Adodc1.Recordset.Fields(0) = txtaccno.Text
    Adodc1.Recordset.Fields(1) = txtpinno.Text
    Adodc1.Recordset.Fields(2) = txtname.Text
    Adodc1.Recordset.Fields(3) = txtamt.Text
    Adodc1.Recordset.Update
    MsgBox " account created succesfully", vbInformation, "SUBSCRIBE BANK"
    'sub function
    
    Call clear_fields
    End Sub
    
    Private Sub Form_Load()
    
    Call clear_fields
    txtamt.MaxLength = 6
    End Sub
    
    
    Public Sub clear_fields()
    txtaccno.Text = ""
    txtpinno.Text = ""
    txtname.Text = ""
    txtamt.Text = ""
    End Sub

FORM 5 CODE:

    Private Sub Form_Load()
    Me.Caption = "Account NO:" & accountno
    Adodc1.RecordSource = "select * from transaction where accno=" & accountno
    Adodc1.Refresh
    Adodc1.Caption = Adodc1.RecordSource
    End Sub

MDI FORM CODE:

    Private Sub balance_Click()
    Form3.Show
    End Sub
    
    Private Sub mini_Click()
    Form5.Show
	End Sub
    
    Private Sub w_Click()
	Form2.Show
    End Sub

MODULE CODE :

    Public accountno As Double



