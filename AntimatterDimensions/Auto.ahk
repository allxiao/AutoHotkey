#Requires AutoHotkey v2.0

; Tray icon and menu customizations
A_IconTip := "Press M"


; Makes Send synonymous with SendInput.
; Recommended for new scripts due to its superior speed and reliability.
SendMode "Input"
; Ensures a consistent starting directory.
SetWorkingDir A_ScriptDir

SetTitleMatchMode 2 ; 窗口标题模糊匹配

Loop {
    ; 检测当前活动窗口是否为Edge浏览器（支持多版本标题匹配）
    ; if WinActive("ahk_exe msedge.exe") || WinActive("Microsoft Edge") {
    if WinActive("Antimatter Dimensions") {
        ; 持续按下m键
        Send "{m down}"

        ; 尝试购买 Antimatter Galaxy
        ;Send "g"

        ; 尝试购买 Dimension Boost
        ;Send "d"

        ; 尝试按 Big Crunch
        Send "c"
    } else {
        Send "{m up}" ; 非Edge窗口时释放m键
    }
    Sleep 1000 ; 检测间隔（毫秒），可调节响应速度
}

; 设置暂停热键（按F1停止脚本）
F1::Pause
