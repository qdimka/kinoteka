import data from './data';

export const getFilms = () => new Promise((resolve) => setTimeout(() => {
  resolve(data.films);
}, 100));

export const getSerials = () => new Promise((resolve) => setTimeout(() => {
  resolve(data.serials);
}, 500));

export const getPopular = () => new Promise((resolve) => setTimeout(() => {
  resolve(data.popular);
}, 1500));
