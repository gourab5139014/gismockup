// DEMO_USERNAME = "";
// DEMO_PASSWORD = "";
// DEMO_MOD_USERNAME = "moderator@buffalo.edu";
// DEMO_MOD_PASSWORD = "moderator";

// window.onload = function () { // wait for load in a dumb way because B-0
//     'use strict';
//     // Script for Login File
//     var button_my_button = "#btnSignIn";
//     // var text_email = $('#inputEmail').val();
//     // var text_password = $('#inputPassword').val();

//     $(button_my_button).click(function () {
//         // window.confirm("Please confirm my purpose")
//         // console.log($.trim(text_email));
//         if($('#inputEmail').val() == DEMO_USERNAME && $('#inputPassword').val() == DEMO_PASSWORD){
//             // window.alert("Login Success!");
//             window.location.replace('dashboard.html');
//         } else if($('#inputEmail').val() == DEMO_MOD_USERNAME && $('#inputPassword').val() == DEMO_MOD_PASSWORD){
//             // window.alert("Login Success!");
//             window.location.replace('moderator_dashboard.html');
//         }
//         // window.location.href = 'Students.html';
//     })
// }

// Old Search Function
$("#xmyInput").keyup(function () {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});

$("#myInput").keyup(function () {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});

