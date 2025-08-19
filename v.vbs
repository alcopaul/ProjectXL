Set fso = CreateObject("Scripting.FileSystemObject")
Set f = fso.OpenTextFile("aries.asm:123.txt", 1)
WScript.Echo f.ReadAll
f.Close