// DOM
const movie = document.querySelector('#movie');
const countEl = document.querySelector('#count');
const totalEl = document.querySelector('#total');
const allSeats = document.querySelectorAll('.container .seat');
const seats = document.querySelectorAll('.container .seat:not(.occupied)');

// state
let selectedMovieIndex = 0;
let selectedSeats = [];

// update UI
function updateUI() {
  updateSelectUI();
  updateSeatsUI();
  updateTextUI();
}
function updateSelectUI() {
  movie.selectedIndex = selectedMovieIndex;
}
function updateSeatsUI() {
  allSeats.forEach((seat, index) => {
    if (selectedSeats.includes(index)) {
      seat.classList.add('selected');
    }
  });
}
function updateTextUI() {
  countEl.innerText = selectedSeats.length;
  totalEl.innerText = movie.value * selectedSeats.length;
}

// event
movie.addEventListener('change', handleMovieChange);
seats.forEach(seat => seat.addEventListener('click', handleSeatClick));

function handleMovieChange() {
  selectedMovieIndex = movie.selectedIndex;
  updateTextUI();
  saveLocalStorage();
}
function handleSeatClick(e) {
  e.target.classList.toggle('selected');
  const seatIndex = parseInt(e.target.dataset.idx);
  if (selectedSeats.includes(seatIndex)) {
    selectedSeats = selectedSeats.filter(val => val !== seatIndex);
  } else {
    selectedSeats.push(seatIndex);
  }
  updateTextUI();
  saveLocalStorage();
}

// save to LocalStorage
function saveLocalStorage() {
  const movieBookingInfo = {
    selectedMovieIndex,
    selectedSeats
  };
  localStorage.setItem('movieBookingInfo', JSON.stringify(movieBookingInfo));
}

// get data from LocalStorage
function fetchLocalStorage() {
  const movieBookingInfo = JSON.parse(localStorage.getItem('movieBookingInfo'));
  return movieBookingInfo;
}

// init app
function init() {
  allSeats.forEach((seat, index) => (seat.dataset.idx = index));
  const movieBookingInfo = fetchLocalStorage();
  if (movieBookingInfo) {
    selectedMovieIndex = movieBookingInfo.selectedMovieIndex;
    selectedSeats = movieBookingInfo.selectedSeats;
  }
  updateUI();
}

init();
