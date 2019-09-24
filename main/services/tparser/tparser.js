import axios from 'axios';

class TParser {
  getUrl(req) {
    return `https://tparser.me/a?q={req}&l=50&gs=`;
  }

  parse(film) {
    if (!film)
      throw new Error();
    return axios
      .get(this.getUrl(film));
  }
}

export default TParser;