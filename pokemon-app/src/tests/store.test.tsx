import { fetchAllPokemons } from "../features/pokemon/pokemonApi"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { fetchPokemons } from "../features/pokemon/pokemonSlice"
import { configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "../features/pokemon/pokemonSlice"

describe("fetchPokemons thunk", () => {
  it("dispatches the correct actions on successful fetch", async () => {
    const store = configureStore({
      reducer: {
        pokemons: pokemonReducer,
      },
    })

    const test = await store.dispatch(fetchPokemons({params: { limit: 10, offset: 0, search: "" }}))
    console.log(test)
    // expect(store.getActions()).toEqual(expectedActions)
  })

  // Ajoutez d'autres tests pour les cas d'erreur ou de chargement si nécessaire
})
