 $(document).ready(function () {
     $('.parallax').parallax();
     $(".button-collapse").sideNav();
     //  $('.mybrand').html('Food in time!');
     $('.modal').modal();
     $('.collapsible').collapsible();
     $('.materialboxed').materialbox();
     var templ = [{
         "name": "fred"
     }]

     var newUserArr = [];
     var arr;
     var outputData;
     var newData;
     var database;
     var form = document.getElementById('form');
     var reg = document.getElementById('reg-form');
     var submit = document.getElementById('submit');
     var create = document.getElementById('create');
     var user = {};
     var newUser = {};
     var userName = document.getElementById('name');
     var userPass = document.getElementById('pass');
     var newUserName = document.getElementById('reg-name');
     var newUserPass = document.getElementById('reg-pass');

     create.addEventListener('click', function (e) {
         e.preventDefault();
         newUser.name = newUserName.value;
         newUser.password = newUserPass.value;

         $.get("https://api.myjson.com/bins/fa8iz", function (data, textStatus, jqXHR) {
             newUserArr = [...data];
             for (var i = 0; i < data.length; i++) {
                 if (data[i].name === newUser.name) {
                     return;
                 } else {
                     console.log('Now you are in our DB');
                     newUserArr.push(newUser);
                     var uniqueNewUser = _.uniqBy(newUserArr, 'name');
                     $.ajax({
                         url: "https://api.myjson.com/bins/fa8iz",
                         type: "PUT",
                         data: JSON.stringify(uniqueNewUser),
                         contentType: "application/json; charset=utf-8",
                         dataType: "json",
                         success: function (data, textStatus, jqXHR) {
                             console.log(data);
                         }
                     });
                 }
             }

         });

     })
     submit.addEventListener('click', function (e) {
         e.preventDefault();
         user.name = userName.value;
         user.password = userPass.value;

         $.get("https://api.myjson.com/bins/fa8iz", function (data, textStatus, jqXHR) {
             arr = [...data];
             for (var i = 0; i < data.length; i++) {
                 if (data[i].name === user.name && data[i].password === user.password) {
                     console.log('Welcome back ' + user.name);
                     //  $('#modal2').html('');
                     $('#login-btn').text('Log out');
                     $('#login-btn').attr('href', '#');
                     $('#reg-btn').css('display', 'none');
                     $('#user-name').text(user.name);
                 } else {
                     console.log('Wrong username or password');
                 }
             }
         });
         $('#login-btn').on('click', function () {
             $('#login-btn').text('Log in');
             $('#reg-btn').css('display', 'inline-block');
             $('#user-name').text('');
         })
     });
 });