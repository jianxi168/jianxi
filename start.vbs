Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\Administrator\Documents\羊毛社群做大做强\work\活码网址"
WshShell.Run "D:\nodejs\node.exe server.js", 0, False
