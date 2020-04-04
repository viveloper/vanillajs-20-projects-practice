export const getMovies = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const movies = [
        {
          name: 'Avengers:Endgame',
          price: 10
        },
        {
          name: 'Joker',
          price: 12
        },
        {
          name: 'Toy Story 4',
          price: 8
        },
        {
          name: 'The Lion King',
          price: 9
        }
      ];
      resolve(movies);
    }, 300);
  });
};
