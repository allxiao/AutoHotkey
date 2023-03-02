#Requires AutoHotkey v2.0

; Makes Send synonymous with SendInput.
; Recommended for new scripts due to its superior speed and reliability.
SendMode "Input"
; Ensures a consistent starting directory.
SetWorkingDir A_ScriptDir

h::{
    Send "{w down}"
    Sleep 10
    Send "{w up}"
    Sleep 40
    Send "{s down}{j down}"
    Sleep 100
    Send "{j up}{s up}"
}

m::{
    Send "{s down}"
    Sleep 10
    Send "{s up}"
    Sleep 40
    Send "{w down}{j down}"
    Sleep 100
    Send "{j up}{w up}"
}

p::{
    Send "{j down}{k down}{l down}"
    Sleep 100
    Send "{j up}{k up}{l up}"
}
