import Filmix from '../services/filmix/filmix';

const filmixActions = {
  getFilms: async (req, res) => {
    const { payload } = req;
    Filmix.getFilms(1)
      .then(data => res.send(data))
      .catch(r => res.error({ error: r.message }));
  },

  getSerials: async (req, res) => {
    const { payload } = req;
    Filmix.getSerials()
      .then(data => res.send(data))
      .catch(r => res.error({ error: r.message }));
  }
};

export default filmixActions;