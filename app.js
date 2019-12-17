'use strict';
console.log('Js is working');

var imageElements = document.getElementsByTagName('img');

var voteIndex1 = 0;
var voteIndex2 = 1;
var voteIndex3 = 2;
var allVotes = [];
var totalClicks = 0;
var clickCount = 25;

function Voteimg(name, imageUrl,){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allVotes.push(this);
}

new Voteimg('bag','img/bag.jpg');
new Voteimg('banana', 'img/banana.jpg');
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



function imageClicked(event) {
 

  if(event.srcElement.id === 'a') {
    allVotes[voteIndex1].timesClicked++;
    totalClicks++

  } 
  else if (event.srcElement.id === 'b') {
    allVotes[voteIndex2].timesClicked++;
    totalClicks++;
  }
  else if(event.srcElement.id === 'c') {
      allVotes[voteIndex3].timesClicked++;
      totalClicks++
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

    console.log(totalClicks)
 
  voteIndex1 = newIndex1;
  voteIndex2 = newIndex2;
  voteIndex3 = newIndex3;

    imageElements[0].src = allVotes[voteIndex1].imageUrl;
    imageElements[1].src = allVotes[voteIndex2].imageUrl;
    imageElements[2].src = allVotes[voteIndex3].imageUrl;
  
    if(totalClicks >= 25) {
      for(var j = 0; j < imageElements.length; j++);
      // imageElements[j].removeEventListener('click',imageClicked);
      // creatList();
    }
    
 }

for (var i = 0; i < imageElements.length; i++) {
imageElements[i].addEventListener('click', imageClicked);
};

function creatList(){
  var listContainer = document.getElementsByTagName('ul')[0];
  for (var k = 0; k < allVotes.length; k++){
    var listItem = document.createElement('li')
    listItem.textContent = (allVotes[k].name, allVotes[k].timesClicked)
    listContainer.appendChild(listItem);
}
console.log(creatList())
}