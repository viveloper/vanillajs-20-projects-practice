const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

movieSelect.addEventListener('change', (e) => {
  updateSelectedCount();
});

loadData();
updateSelectedCount();

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  const ticketPrice = movieSelect.value;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  saveData();
}

function saveData() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsIndex = [...selectedSeats].map((selectedSeat) =>
    [...seats].findIndex((seat) => seat === selectedSeat)
  );
  const selectedMovieIndex = movieSelect.selectedIndex;

  localStorage.setItem(
    'selectedSeatsIndex',
    JSON.stringify(selectedSeatsIndex)
  );
  localStorage.setItem(
    'selectedMovieIndex',
    JSON.stringify(selectedMovieIndex)
  );
}

function loadData() {
  const selectedMovieIndex = parseInt(
    localStorage.getItem('selectedMovieIndex')
  );
  if (selectedMovieIndex) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  const selectedSeatsIndex = JSON.parse(
    localStorage.getItem('selectedSeatsIndex')
  );
  if (selectedSeatsIndex) {
    seats.forEach((seat, index) => {
      if (selectedSeatsIndex.includes(index)) {
        seat.classList.add('selected');
      }
    });
  }
}
