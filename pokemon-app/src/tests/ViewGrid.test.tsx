import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test } from "@jest/globals"
import "@testing-library/jest-dom"
import { renderWithStateMgmt } from "./config"
import ViewGrid from "../components/ViewGrid"
import { fetchPokemons } from "../features/pokemon/pokemonSlice"
import { fetchAllPokemons } from "../features/pokemon/pokemonApi"

describe("ViewGrid Component", () => {
  it("renders correctly", () => {
    const settings = {
      fetch: (params: any) => fetchPokemons({ params }),
      title: "Pokemon",
    }
    renderWithStateMgmt(<ViewGrid settings={settings} />)

    const textField = screen.getByTestId("search-bar")
    expect(textField).toBeInTheDocument()
  })
})

