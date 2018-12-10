---
layout: post
title: Simple web browser visual basic 6.0
date: 2014-02-20 13:35:00 -0400
tags: [projects]
image: webbrwoser.jpg

---

Its a simple Project who are intrested in learning to code on visual basic

Video []


Source code []


```
Private Sub Command1_Click()
On Error Resume Next

WebBrowser1.GoBack
Text1.Text = WebBrowser1.LocationURL
End Sub

Private Sub Command2_Click()
On Error Resume Next

WebBrowser1.GoForward
Text1.Text = WebBrowser1.LocationURL
End Sub

Private Sub Command3_Click()
Text1.Text = "file://c:"
WebBrowser1.Navigate Text1.Text
End Sub

Private Sub Command4_Click()
WebBrowser1.Refresh
End Sub

Private Sub Command5_Click()
WebBrowser1.Stop
End Sub



Private Sub Text1_KeyPress(KeyAscii As Integer)
If KeyAscii = 13 And Text1.Text <> "" Then WebBrowser1.Navigate Text1.Text
End Sub

Private Sub WebBrowser1_DownloadBegin()
Me.Caption = "web browser: " & WebBrowser1.LocationName
App.Title = "web browser:  " & WebBrowser1.LocationName

Label2.Caption = "loading wait"

End Sub

// add a frame then code this which i missed in video
Private Sub Form_Resize()

On Error Resume Next
Move (Screen.Width - Width) \ 29, (Screen.Height - Height) \ 29

    Frame1.Left = (Me.Width - Frame1.Width) / 2
    Frame1.Top = Me.Height - (Frame1.Height + 480)
    
    WebBrowser1.Width = Me.Width - 360
    WebBrowser1.Height = Frame1.Top - 180

End Sub



Private Sub WebBrowser1_DownloadComplete()
Me.Caption = "web browser: " & WebBrowser1.LocationName
App.Title = "web browserL:  " & WebBrowser1.LocationName
Label2.Caption = "done"
End Sub

Private Sub WebBrowser1_NavigateComplete2(ByVal pDisp As Object, URL As Variant)

Text1.Text = WebBrowser1.LocationURL
Text2.Text = WebBrowser1.LocationURL

Me.Caption = "web browser: " & WebBrowser1.LocationName
App.Title = "web browser:  " & WebBrowser1.LocationName

End Sub


Private Sub WebBrowser1_NewWindow2(ppDisp As Object, Cancel As Boolean)

Dim frm_web As Form1

Set frm_web = New Form1

With frm_web
.WindowState = vbNormal
.Top = frm_web.Top + 1200
.Left = frm_web.Left + 1200
Set ppDisp = frm_web.WebBrowser1.Object


frm_web.Show
End With
End Sub

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/BSCI6QPCnd4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


It's best viewed on desktop rather than mobile, and can be accessed [here]

