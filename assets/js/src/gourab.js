DEMO_USERNAME = "gourabmi@buffalo.edu";
DEMO_PASSWORD = "gourabmi";

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
            window.alert("Login Success!");
        }
        // window.location.href = 'Students.html';
    })
}