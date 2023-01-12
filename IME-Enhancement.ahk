#Requires AutoHotkey v2.0

; Tray icon and menu customizations
A_IconTip := "Windows IME Enhancement"
A_TrayMenu.Delete("&Open")
A_TrayMenu.Delete("&Help")
A_TrayMenu.Delete("1&")
A_TrayMenu.Delete("&Window Spy")
A_TrayMenu.Delete("&Reload Script")
A_TrayMenu.Delete("&Edit Script")
A_TrayMenu.Delete("1&")
A_TrayMenu.Delete("&Pause Script")

; Makes Send synonymous with SendInput.
; Recommended for new scripts due to its superior speed and reliability.
SendMode "Input"
; Ensures a consistent starting directory.
SetWorkingDir A_ScriptDir

; Disable - LShift+Space to switch between half-width and full-width characters.
; RShift+Space is left unchanged.
$<+space::
{
    Send "{Space}"
}

; Ctrl-space to switch between the most recently used two input methods.
$<^space::
{
    Send "^#{Space}"
}
