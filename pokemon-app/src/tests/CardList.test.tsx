// SearchBar.test.jsx
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test } from "@jest/globals"
import CartList from "../components/CartList"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { renderWithStateMgmt } from "./config"
import { addPokemon, removePokemon } from "../features/pokemon/pokemonSlice"
import CustomCard from "../components/CustomCard"

describe("CartList Component", () => {
  it("renders correctly", () => {
    renderWithStateMgmt(
      <BrowserRouter>
        <CartList />
      </BrowserRouter>,
    )
    const textField = screen.getByText(/No items in cart/i)
    expect(textField).toBeInTheDocument()
  })

  it("Delete correctly", () => {
    const mockData = {
      images: { large: "/path/to/image.png" },
      name: "Pikachu",
      cardmarket: { prices: { averageSellPrice: 10 } },
    }

    const { store } = renderWithStateMgmt(
      <BrowserRouter>
        <CustomCard data={mockData} add />
        <CartList />
      </BrowserRouter>,
      {
        actions: [
          addPokemon(mockData) as never,
          removePokemon(mockData) as never,
        ],
      },
    )

    const addButton = screen.getByRole("button", { name: /add/i })
    fireEvent.click(addButton)

    const etatActuel = store.getState().pokemons.pokemonsInCart
    expect(etatActuel).toContain(mockData)

    const removeButton = screen.getByTestId("remove-cart-Pikachu")
    fireEvent.click(removeButton)

    const etatActuel2 = store.getState().pokemons.pokemonsInCart
    expect(etatActuel2).not.toContain(mockData)
  })
})
