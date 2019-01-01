---
layout: post
title: visual basic 6.0 quiz code 
date: 2018-01-01 13:35:00 -0400
tags: [tech-blog,projects]
image: ppp-landing.jpg

---

Its a simple Project who are intrested in learning to code on visual basic

note : add 1 references before starting the project

  PROJECT --> REFERENCES --> MICROSOFT DA0 2.51/3.51 COMPATIBILITY LIBRARY

Video []


Source code []


```
Dim db As Database
Dim rec As Recordset
Dim score As Variant

Private Sub Command1_Click()
If Command1.Caption = "START" Then
Command1.Visible = False

Label3.Visible = True
 
  Option1.Enabled = True
  Option2.Enabled = True
  Option3.Enabled = True
  Option4.Enabled = True
  Label1.Visible = True
  Option1.Value = False

Else: rec.MoveNext
End If

End Sub

Private Sub Form_Load()
Set db = OpenDatabase("C:\Users\Crypto\Desktop\quiz1.mdb")
Set rec = db.OpenRecordset("quiz")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False

If rec.EOF Then

Form1.Hide
Load Form1
Form1.Show

MsgBox "completed the survey"

End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")

 Timer1.Interval = 1000
 Label3.Caption = 120
    Label3.Visible = False
   
  Label5.Caption = Format(Now, "HH:MM:SS")
  Option1.Enabled = False
  Option2.Enabled = False
  Option3.Enabled = False
  Option4.Enabled = False
  Label1.Visible = False

End Sub

Private Sub Label6_Click()

End Sub

Private Sub Option1_Click()
If Option1.Caption = rec.Fields("Answer") Then
score = score + 1
Form3.Label1.Caption = score + 1

Label2.Caption = score

rec.MoveNext
If rec.EOF Then
rec.MovePrevious
Form1.Hide
Form3.Show


End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False


Else:
score = score - 1
Label2.Caption = score

MsgBox "this is wrong ansawer", vbCritical

rec.MoveNext
If rec.EOF Then
rec.MovePrevious
Form1.Hide
Form3.Show


End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False




End If

End Sub

Private Sub Option2_Click()
If Option2.Caption = rec.Fields("Answer") Then

score = score + 1
Form3.Label1.Caption = score + 1
rec.MoveNext
If rec.EOF Then
rec.MovePrevious
Form1.Hide
Form3.Show
End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False


Else:
score = score - 1
Label2.Caption = score

MsgBox "this is wrong Answer", vbCritical

rec.MoveNext
If rec.EOF Then
rec.MovePrevious
Form1.Hide
Form3.Show
End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False


End If

End Sub

Private Sub Option3_Click()
If Option3.Caption = rec.Fields("Answer") Then

score = score + 1
Form3.Label1.Caption = score + 1

Label2.Caption = score

rec.MoveNext
If rec.EOF Then
Form1.Hide
Form3.Show
End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False


Else:
score = score - 1
Label2.Caption = score

MsgBox "this is wrong ansawer", vbCritical

rec.MoveNext
If rec.EOF Then
rec.MovePrevious
Form1.Hide
Form3.Show
End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False



End If

Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False




End Sub

Private Sub Option4_Click()
If Option4.Caption = rec.Fields("Answer") Then

score = score + 1
Form3.Label1.Caption = score + 1
Label2.Caption = score

rec.MoveNext
If rec.EOF Then
Form1.Hide
Form3.Show
End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False


Else:
score = score - 1
Label2.Caption = score

MsgBox "this is wrong ansawer", vbCritical
rec.MoveNext
If rec.EOF Then
rec.MovePrevious

Form1.Hide
Form3.Show

End If
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Label1.Caption = rec.Fields("Question")
Option1.Caption = rec.Fields("option1")
Option2.Caption = rec.Fields("option2")
Option3.Caption = rec.Fields("option3")
Option4.Caption = rec.Fields("option4")
Option1.Value = False
Option2.Value = False
Option3.Value = False
Option4.Value = False



End If


End Sub

Private Sub Timer1_Timer()
If Command1.Visible = False Then
Timer1.Enabled = True
Label3.Caption = Label3.Caption - 1
If Label3.Caption = 0 Then
          Timer1.Enabled = False
          Form1.Visible = False
          Form1.Hide
          Form3.Show
          
         
          Unload Me
          
     End If
End If
End Sub

Private Sub Timer2_Timer()
Label5.Caption = Format(Now, "HH:MM:SS")

If Label5.Visible = True Then
Label5.Visible = False
Else: Label5.Visible = True

End If
End Sub



```
<iframe width="560" height="315" src="https://www.youtube.com/embed/MW6t2g2f8-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


It's best viewed on desktop rather than mobile, and can be accessed [here]
