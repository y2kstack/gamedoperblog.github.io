---
layout: post
title: Email validation Visual basic 6.0
date: 2019-03-27 13:58:00 -0400
tags: [tech-blog,projects]
image: ppp-landing.jpg

---
Email Validation code is Given below copy IT
Video []


Source code []
```
    Option Explicit




Public Function validate_email(ByVal email As String) As Boolean

Dim i As Integer
Dim j As Integer
Dim chracter As String
Dim pos As Integer
Dim bool As Boolean
Dim pos1 As Integer
Dim pos2 As Integer

On Local Error GoTo err_sub

email = Trim$(email)

If email = vbNullString Then
Exit Function
End If


email = LCase$(email)
j = Len(email)

For i = 1 To j
chracter = Mid(email, i, 1)

If (Not (chracter Like "[a-z]")) And (Not (chracter Like "[0-9]")) Then

    If InStr(1, "_-" & "." & "@", chracter) > 0 Then
        
        If bool = True Then
        Exit Function
        Else
        bool = True
        
        If i = 1 Or i = j Then
        Exit Function
        End If
        
        If chracter = "@" Then
            If pos1 = 0 Then
            pos1 = i
            Else
            
            Exit Function
            End If
            
            End If
            
            If chracter = "." Then
            pos2 = i
            End If
            
            End If
            
            Else
            
            Exit Function
            End If
            Else
            bool = False
            End If
            
            Next i
            
            If pos1 = 0 Or pos2 = 0 Then
            Exit Function
            
            End If
            
            
            validate_email = True
            
            
            Exit Function
            
err_sub:
      On Local Error Resume Next
      
      validate_email = False
      End Function
      
            

Private Sub Command1_Click()
MsgBox "email check : " & Text1 & vbNewLine & _
    Format(validate_email(Text1), "YES/NO") & " <<<< valid ", vbInformation
    

End Sub



Private Sub Form_Load()

Command1.Caption = "email validation"
Text1 = "enter email"


End Sub

```

It's best viewed on desktop rather than mobile, and can be accessed [here]

<iframe width="560" height="315" src="https://www.youtube.com/embed/6cO5NQ3QAHs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



