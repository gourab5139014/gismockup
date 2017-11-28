DEMO_USERNAME = "";
DEMO_PASSWORD = "";
DEMO_MOD_USERNAME = "moderator@buffalo.edu";
DEMO_MOD_PASSWORD = "moderator";

window.onload = function () { // wait for load in a dumb way because B-0
    'use strict';
    // Script for Login File
    var button_my_button = "#btnSignIn";
    // var text_email = $('#inputEmail').val();
    // var text_password = $('#inputPassword').val();

    $(button_my_button).click(function () {
        // window.confirm("Please confirm my purpose")
        // console.log($.trim(text_email));
        if($('#inputEmail').val() == DEMO_USERNAME && $('#inputPassword').val() == DEMO_PASSWORD){
            // window.alert("Login Success!");
            window.location.replace('dashboard.html');
        } else if($('#inputEmail').val() == DEMO_MOD_USERNAME && $('#inputPassword').val() == DEMO_MOD_PASSWORD){
            // window.alert("Login Success!");
            window.location.replace('moderator_dashboard.html');
        }
        // window.location.href = 'Students.html';
    })
}