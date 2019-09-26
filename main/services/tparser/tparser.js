import axios from 'axios';

const constructUrl = (query, count = 50) => {
  return `https://tparser.me/a?q=${query}&l=${count}&gs=`;
};

const getTorrents= (query) => {
  return axios
    .get(this.constructUrl(query));
};

export default getTorrents;