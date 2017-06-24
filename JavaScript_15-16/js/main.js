// -----------------------------FACEBOOK API-------------------//
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1175509292553446',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 function statusChangeCallback(response) {
   if (response.status === 'connected') {
     setElements(true);
     getData();
     console.log('Logged in!');
     console.log(response);
     content.style.display = 'block';
     child.style.display = 'block';
     popup.style.display = 'none';
   } else {
     setElements(false);
     console.log('Not logged in');
     content.style.display = 'none';
     userPhoto.setAttribute('src', '');
     popup.style.display = 'block';
   }
 }

var sidebar = document.querySelector('.sidebar'),
child = document.querySelector('.list-group'),
input = document.querySelector('#input'),
inputValue = input.value,
userDevice = document.getElementById('user-birthday'),
userLink = document.querySelector('#fb-link'),
userName = document.querySelector('.user-name'),
userEmail = document.querySelector('.user-email'),
userPhoto = document.getElementById('user-photo'),
form = document.getElementById('form'),
photos = document.querySelector('.photos'),
popup = document.querySelector('.popup'),
content = document.querySelector('.content'),
elem, imgBlock, searches =  [];
// localStorage.clear('searchHistory');
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function setElements(isLoggedIn) {
  if (isLoggedIn) {
    document.getElementById('logout').style.display = 'block';
    document.getElementById('social').style.display = 'none';
    console.log('true');
  } else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('social').style.display = 'block';
    console.log('false');
  }
}

function logOut(response) {
  FB.logout(function(response) {
    setElements(false);
    statusChangeCallback(response);
    userName.innerHTML = "Name";
    userEmail.innerHTML = "E-mail";
    userLink.removeAttribute('href');
  });
}

function getData() {
 FB.api('/me?fields=id,name,birthday,email,devices,gender,first_name,link,picture', function (response) {
   if (response && !response.error) {
     userPhoto.setAttribute('src', response.picture.data.url);
     var appName = document.getElementById('app-name');
     appName.innerHTML = response.name + ' app';
     if (response.email !== undefined) {
       userEmail.innerHTML = "E-mail: " + response.email;
     }
     if (response.name !== undefined) {
       userName.innerHTML = "Name: " + response.name;
     }
     if (response.link !== undefined) {
       userLink.setAttribute('href', response.link);
     }
   }
 });
}

// -----------------------------PIXABAY SEARCH API-------------------//

form.addEventListener('submit', search = ev => {
  ev.preventDefault();
  var photos = document.querySelector('.photos');
  photos.innerHTML = '';
  input = document.querySelector('#input');
  inputValue = input.value;
  searches.push(input.value);
  localStorage.setItem('searchHistory', searches);
  $.ajax({
    url: "https://pixabay.com/api/?key=5694558-599f2bb22075e940da08e86bd&q=" + inputValue + "&image_type=photo&pretty=true",
    type: 'GET',
    success: function (data) {
      createRequestResults(data);
      searchHistory();
    }
  })
  .done(function() {
    console.log("success");
    input.value = '';
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});

function createRequestResults(data) {
  if (data.totalHits === 0) {
    var noresult = document.createElement('h1');
    noresult.innerHTML = "Ooops! Can't find '" + input.value + "'";
    photos.style.display = 'block';
    photos.appendChild(noresult);
  } else {
    for (var i = 0; i < data.hits.length; i++) {
      var imgSource = data.hits[i].previewURL;
      var img = document.createElement('img');
      imgBlock = document.createElement('div');
      imgBlock.className = 'img-thumbnail item-masonry sizer4';
      img.setAttribute('src', imgSource);
      imgBlock.appendChild(img);
      photos.style.display = 'block';
      photos.appendChild(imgBlock);
    }
    var $grid = $('.photos');
    $grid.imagesLoaded(function () {
      $grid.masonry({
        itemSelector: '.item-masonry',
        columnWidth: '.sizer4',
        percentPosition: true
      });
      $grid.masonry('reloadItems');
      $grid.masonry();
    });
    return imgBlock;
  }
}

function searchHistory() {
  var data = localStorage.getItem('searchHistory').split(',');
  var searchList = document.querySelector('.search-history');
  searchList.innerHTML = '';
  console.log(searches);
  data.forEach(function (item) {
    var listItem = document.createElement('li');
    listItem.className = 'img-thumbnail search-item';
    listItem.innerHTML = item;
    searchList.appendChild(listItem);
  });
  var items = document.querySelector('.search-history');
  items.onclick = function (ev) {
    input.value = ev.target.innerHTML;
    search(ev);
  };
}
