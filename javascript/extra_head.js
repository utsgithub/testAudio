
//todo: Translate to English
window.onbeforeunload = onbeforeunload_handler;
function onbeforeunload_handler() {
    var warning = "确认退出?";
    return warning;
}
$(function () {
    $(document).keydown(function (event) {
        if ((event.altKey && event.keyCode == 83)) {
            //在这里接收的是Alt+S事件,S的ASCII码为83。
            //alert( $("#btnPart a:not(:hidden)").length );
            if ($("#btnPart a:not(:hidden)").length == 1) {
                $("#btnPart a:not(:hidden)").click();
            }
        }
    });
});