console.log('Here are all the available people:', people);

$(document).ready(shuffle);

let answer = '';

function shuffle() {
  shuffleList(people);
  $('#picture').children().remove();
  postPic();
}

//append to DOM
function postPic() {
  for (let persons of people) {
    let profPic = $(
      `<div><img class="image" src="https://github.com/${persons.githubUsername}.png?size=250" alt="Profile image of ${persons.name}"></div>`
    );
    profPic.data('name', persons.name);
    $('#pictureList').append(profPic);
  }
  newName();
  $('div').on('click', clickMe);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//return array with a shuffled order
function shuffleList(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
