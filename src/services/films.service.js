import data from './data';

export const getFilms = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(data.films);
        }, 1500);
    });
};

export const getSerials = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(data.serials);
        }, 1500);
    });
};

export const getPopular = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(data.popular);
        }, 1500);
    });
};
