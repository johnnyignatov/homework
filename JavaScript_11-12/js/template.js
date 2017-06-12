var data = [
  {
    name: 'Zerk',
    phone: '+3 800 200 500',
    img: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/14702285_124298954704090_5193889283760936789_n.jpg?oh=8f6b378031a2ffcdbac3992354543cf4&oe=59A1B175',
    facebook: 'https://www.facebook.com/profile.php?id=100013719586629&fref=ts'
  },
  {
    name: 'Mark',
    phone: '+3 800 200 500',
    img: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/13269287_279628305760848_855416754253644711_n.jpg?oh=23f8b61a46de28be4c72d0c8372d873a&oe=59D8B837',
    facebook: 'https://www.facebook.com/markrobertgold?fref=ts'
  },
  {
    name: 'Khlopik',
    phone: '+3 800 200 500',
    img: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/16708246_10211807608331183_8424747149857766519_n.jpg?oh=17ad9ec34f43178ecf2c206cace1b838&oe=59E9A33E',
    facebook: 'https://www.facebook.com/oleksii.khlopotov?fref=ts'
  },
  {
    name: 'Anton',
    phone: '+3 800 200 500',
    img: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11173413_1579710605651307_4091403186408129968_n.jpg?oh=ab1604050b140743b2aad1d48d7e317e&oe=59E29997',
    facebook: 'https://www.facebook.com/profile.php?id=100008371487878&fref=ts'
  },
];

var sourse = document.getElementById('template').innerHTML;
var root = document.getElementById('root');
var template = Handlebars.compile(sourse);

root.innerHTML = template({data: data});
