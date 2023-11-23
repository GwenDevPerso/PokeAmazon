import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAllPokemons } from "./pokemonApi"

// Créez une action asynchrone pour effectuer la requête GET
export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async ({ params }: { params: any}) => {
    const response = await fetchAllPokemons(params.limit, params.offset, params.search)
    return response.data
  },

)

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    data: [],
    loading: "idle",
    pokemonsInCart: [] as PokemonCard[],
    error: null, // Add this line to assign null to the error property
  },
  reducers: {
    addPokemon: (state, action) => {
      state.pokemonsInCart.push(action.payload );
    },
    removePokemon: (state, action) => {
      console.log("deletePokemon", action.payload)
      for (let i = 0; i < state.pokemonsInCart.length; i++) {
        if (state.pokemonsInCart[i].name === action.payload.name) {
          state.pokemonsInCart.splice(i, 1);
          break; // Sortez de la boucle après avoir supprimé le premier élément correspondant
        }
      }
      // state.pokemonsInCart = state.pokemonsInCart.filter(item => item.name !== action.payload.name)
      // state.pokemonsInCart.push(action.payload );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = "loading"
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = "succeeded"
        console.log("action.payload")
        state.data = action.payload
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = "failed"
        // state.error = action.error.message
      })
  },
})

export const { addPokemon, removePokemon } = pokemonSlice.actions;


export default pokemonSlice.reducer
