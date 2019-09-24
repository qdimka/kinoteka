import TParser from '../services/tparser/tparser';

const filmActions = {
  getFilms: async (req, res) => {
    const { payload } = req;
    new TParser()
      .parse(payload)
      .then(data => res.send(data.data.items))
      .catch(r => res.error({ error: r.message }));
  }
};

export default filmActions;