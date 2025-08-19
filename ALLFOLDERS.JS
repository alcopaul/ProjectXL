var wsh = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
x2x("c:\\");
function x2x(str)
{
var folder = fso.GetFolder(str);
var e = new Enumerator(folder.SubFolders);
for (; !e.atEnd(); e.moveNext())
{
var ex = e.item().Path;
wsh.Popup(ex);
x2x(ex);
}
}

/*

alCoPaUL, beth GviLLErMo [GIMO]
8/19/2025 NYC 1:53 PM EDT

*/