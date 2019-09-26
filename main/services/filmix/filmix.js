import { FILMS, FOUR_K, HOST, MULTS, SERIALS, WATCHING_NOW } from './filmixConfig';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

const constructUrl = (path) => `${HOST}/${path}`;

const getFilms = () => {
  return get(constructUrl(FILMS));
};

const getSerials = () => {
  return get(constructUrl(SERIALS));
};

const getMults = () => {
  return get(constructUrl(MULTS));
};

const get4K = () => {
  return get(constructUrl(FOUR_K));
};

const getWatchingNow = () => {
  return get(constructUrl(WATCHING_NOW));
};

const get = (url) => {
  return axios
    .get(url, { responseType: 'arraybuffer' })
    .then(html => mapToData(iconv.decode(html.data, 'cp1251')));
};

const mapToData = html => {
  let $ = cheerio.load(html, { decodeEntities: false });
  return $('.shortstory.line').map((i, el) => {
    return {
      title: $(el).find('.name>a.btn-tooltip').text(),
      imageUrl: $(el).find('img.poster.poster-tooltip').attr('src'),
      quality: $(el).find('.quality').text().trim(),
      year: $(el).find('a[itemprop=copyrightYear]').text()
    };
  }).get();
};

export default {
  getFilms,
  getSerials,
  getMults,
  get4K,
  getWatchingNow
};