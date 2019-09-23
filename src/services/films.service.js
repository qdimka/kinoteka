import data from './data';

export const getFilms = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            //resolve(data.films);
            reject(new Error("Whoops!"))
        }, 100);
    });
};

export const getSerials = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(data.serials);
        }, 500);
    });
};

export const getPopular = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(data.popular);
        }, 1500);
    });
};
