

While Browser("(45) Tinder").Exist(2)

'Browser("Tinder | Match. Chat.").Page("Tinder | Match. Chat.").WebButton("Like").Click

	Dim mySendKeys
	set mySendKeys = CreateObject("WScript.shell")
	mySendKeys.SendKeys("{RIGHT}")
	wait 0.5

Wend

ExitTest


 @@ script infofile_;_ZIP::ssf1.xml_;_
 @@ script infofile_;_ZIP::ssf2.xml_;_
