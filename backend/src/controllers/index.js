import pokemon from "../config/apipokemon.config.js";

async function getAll(req, res) {
  try {
    const { limit, offset, search } = req.query;
    if (search) {
      const cards = await pokemon.card.where({
        pageSize: limit,
        page: offset,
        q: `name:${search}`,
      });
      
      res.status(200).send({ data: cards.data });
      return;
    }
    const cards = await pokemon.card.where({ pageSize: limit, page: offset });
    res.status(200).send({ data: cards.data });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default { getAll };
