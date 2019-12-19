'use strict';
console.log('Js is working');

var imageElements = document.getElementsByTagName('img');

var voteIndex1 = 0;
var voteIndex2 = 1;
var voteIndex3 = 2;
var allVotes = [];
var totalClicks = 0;


function Voteimg(name, imageUrl,timesClicked = 0,imageview = 0){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = timesClicked;
  this.imageview = imageview;

  allVotes.push(this);

}

var gettingImages = localStorage.getItem('newGetImage');
if (gettingImages){
  var changeToObject = JSON.parse(gettingImages);
  for(let i=0; i<changeToObject.length; i++)
    new Voteimg(changeToObject[i].name, changeToObject[i].imageUrl,changeToObject[i].timesClicked, changeToObject[i].imageview);
}else{

  new Voteimg('bag','img/bag.jpg');
  new Voteimg('bnanana', 'img/banana.jpg');
  new Voteimg('bathroom', 'img/bathroom.jpg');
  new Voteimg('boots', 'img/boots.jpg');
  new Voteimg('breakfast', 'img/breakfast.jpg');
  new Voteimg('bubblegum', 'img/bubblegum.jpg');
  new Voteimg('chair', 'img/chair.jpg');
  new Voteimg('cthulhu', 'img/cthulhu.jpg');
  new Voteimg('dog-duck','img/dog-duck.jpg');
  new Voteimg('dragon', 'img/dragon.jpg');
  new Voteimg('pen', 'img/pen.jpg');
  new Voteimg('pet-sweep', 'img/pet-sweep.jpg');
  new Voteimg('scissors', 'img/scissors.jpg');
  new Voteimg('shark','img/shark.jpg');
  new Voteimg('sweep', 'img/sweep.png');
  new Voteimg('tauntaun', 'img/tauntaun.jpg');
  new Voteimg('unicorn', 'img/unicorn.jpg');
  new Voteimg('usb', 'img/usb.gif');
  new Voteimg('water-can','img/water-can.jpg');
  new Voteimg('wine-glass', 'img/wine-glass.jpg');

}
// code pulled from www.https://www.w3schools.com/
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';


  return bgColor;
}
function getTheName(){
  var getName = [];
  for (var b = 0; b < allVotes.length; b++){
    getName[b] = allVotes[b].name;
  }
  return getName;
}
function getTheclick(){
  var getClick = [];
  for (var c = 0; c < allVotes.length; c++){
    getClick[c] = allVotes[c].timesClicked;
  }
  return getClick;
}
function getImageViewed(){

  var getimage = [];
  for (var d = 0; d< allVotes.length; d++){
    getimage[d] = allVotes[d].imageview;
  }
  return getimage;
}


function imageClicked(event) {


  if(event.srcElement.id === 'a') {
    allVotes[voteIndex1].timesClicked++;
    totalClicks++;

  }
  else if (event.srcElement.id === 'b') {
    allVotes[voteIndex2].timesClicked++;
    totalClicks++;
  }
  else if(event.srcElement.id === 'c') {
    allVotes[voteIndex3].timesClicked++;
    totalClicks++;
  }


  var newIndex1 = Math.floor(Math.random()*allVotes.length);

  var newIndex2 = Math.floor(Math.random()*allVotes.length);
  while (newIndex2 === newIndex1){
    newIndex2 = Math.floor(Math.random()*allVotes.length);
  }
  var newIndex3 = Math.floor(Math.random()*allVotes.length);
  while ((newIndex3 === newIndex1) || (newIndex3 === newIndex2)){
    newIndex3 = Math.floor(Math.random()*allVotes.length);
  }

  voteIndex1 = newIndex1;
  voteIndex2 = newIndex2;
  voteIndex3 = newIndex3;

  imageElements[0].src = allVotes[voteIndex1].imageUrl, allVotes[voteIndex1].imageview++;
  imageElements[1].src = allVotes[voteIndex2].imageUrl, allVotes[voteIndex2].imageview++;
  imageElements[2].src = allVotes[voteIndex3].imageUrl, allVotes[voteIndex3].imageview++;


  if(totalClicks >= 25) {
    for(var j = 0; j < imageElements.length; j++){

      imageElements[j].removeEventListener('click', imageClicked);
    }

    creatList();
    magicJschart();
  }
  localStorage.setItem('newGetImage',JSON.stringify(allVotes));
}


for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageClicked);
}

function creatList(){
  var listContainer = document.getElementsByTagName('ul')[0];
  for (var k = 0; k < allVotes.length; k++){
    var listItem = document.createElement('li');
    // listItem.textContent = (allVotes[k].name, 'clicked', allVotes[k].timesClicked, 'view', allVotes[k].imageview)
    listItem.textContent = `${allVotes[k].name} clicked ${allVotes[k].timesClicked} view ${allVotes[k].imageview}`;

    listContainer.appendChild(listItem);
  }
}
function magicJschart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getTheName(),
      datasets: [{
        label: '# of vote',
        data: getTheclick(),
        backgroundColor: random_bg_color(),
      },
      {
        label: '# of view',
        data: getImageViewed(),
        backgroundColor: random_bg_color(),
        borderColor: random_bg_color(),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
