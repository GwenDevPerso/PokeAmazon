import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: process.env.API_POKEMON_KEY})

export default pokemon;