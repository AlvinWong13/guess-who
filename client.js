console.log(people);

$(document).ready(shuffle);

let answer = '';

//rearrange picture order
function shuffle() {
  shuffleList(people);
  $('#pictureList').children().remove();
  displayPic();
}

//append to DOM
function displayPic() {
  for (let persons of people) {
    let profPic = $(`
    <div><img class="image" src="https://github.com/${persons.githubUsername}.png?size=250" alt="Profile image of ${persons.name}"></div>
    `);
    profPic.data('name', persons.name);
    $('#pictureList').append(profPic);
  }
  answered();
  $('div').on('click', clicked);
}

//assign new name to pick
function answered() {
  let a = randomNumber(0, 10);
  $('.findName').text(people[a].name);
  answer = people[a].name;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//Click correct person gives success message
//Wrong choice prompts error message to try again
function clicked() {
  //console.log('clicked!');
  if ($(this).data('name') === answer) {
    let alertWindow = window.open('', 'alertWindow', 'width=400, height=150');
    alertWindow.document.write('<p>Winner! Play again!</p>');
    setTimeout(function () {
      alertWindow.close();
      shuffle();
    }, 2000);
  } else {
    alert('Uh oh! Incorrect, pick again!');
  }
}

//return array with a shuffled order
function shuffleList(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
