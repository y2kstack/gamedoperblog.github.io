---
layout: post
title: TEXT TO SPEECH CONVERTER + SYNTHESIZE THE TEXT TO AUDIO
date: 2019-12-18
tags: [tech-blog]
image: he.jpg

---




# DLL FILE XVOICE.DLL

[DOWNLOAD](http://bit.ly/2EvQWOg) 



#  COPY THE CODE HERE
    ''API REFERENCE FROM
    
    Private Declare Function TextOut& Lib "gdi32" Alias "TextOutA" (ByVal ahDc&, ByVal x1&, ByVal y1&, ByVal lpString$, ByVal nCount&)
    
    Public Sub OptUpdate()
    
    
    HScpitch.Min = DirectSS.MinPitch
    HScpitch.Max = DirectSS.MaxPitch
    
    HScspeed.Min = DirectSS.MinSpeed
    HScspeed.Max = DirectSS.MaxSpeed
    End Sub
    
    
    
    Private Sub cmdExit_Click()
    End
    End Sub
    
    Private Sub cmdExit_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    cmdEXIT.BackColor = vbRed
    End Sub
    
    Private Sub cmdExit_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
    cmdEXIT.BackColor = vbYellow
    End Sub
    
    Private Sub cmdSpeak_Click()
    On Error Resume Next
    
    DirectSS.FileName = ""
    
    
    If optrecord.Value = True Then
    DirectSS.FileName = Trim(txtfilename)
    End If
    
    DirectSS.Select (lstEngine.ListIndex + 1)
    DirectSS.Speed = HScspeed.Value
    DirectSS.Pitch = HScpitch.Value
    DirectSS.Speak txtspeak.Text
    
    
    End Sub
    
    Private Sub Form_Load()
    
    
    On Error Resume Next
    Dim vEngines As Integer
    Dim Count As Integer
    vEngines = DirectSS.CountEngines
    
    For Count = 1 To vEngines
    lstEngine.AddItem DirectSS.ModeName(Count), Count - 1
    lstEngine.ListIndex = 0
    Next
    
    
    OptUpdate
    txtfilename.Text = App.Path + "\" + "mysound.wav"
    End Sub
    
    
    
    Private Sub Form_Unload(Cancel As Integer)
    End
    End Sub
    
    Private Sub lstEngine_Click()
    On Error Resume Next
    DirectSS.Select (lstEngine.ListIndex + 1)
    OptUpdate
    
    End Sub
    
    Private Sub cmdSpeak_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    cmdspeak.BackColor = vbRed
    End Sub
    Private Sub cmdSpeak_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
    cmdspeak.BackColor = vbYellow
    End Sub
    
    
    
   
# ANY DOUBTS PLEASE POST IN COMMENT SECTION
