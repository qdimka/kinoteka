import {} from '../services/filmix/filmix';
import { getFilms } from '../services/filmix/filmix';
import { getSerials } from '../services/filmix/filmix';


const filmixActions = {
  getFilms: async (req, res) => {
    const { payload } = req;
    getFilms()
      .then(data => res.send(data))
      .catch(r => res.error({ error: r.message }));
  },

  getSerials: async (req, res) => {
    const { payload } = req;
    getSerials()
      .then(data => res.send(data))
      .catch(r => res.error({ error: r.message }));
  }
};

export default filmixActions;