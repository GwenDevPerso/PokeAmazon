import CustomCard from "../components/CustomCard"
import { screen, fireEvent } from "@testing-library/react"
import { describe, expect } from "@jest/globals"
import "@testing-library/jest-dom"
import { renderWithStateMgmt } from "./config"
import { addPokemon, removePokemon } from "../features/pokemon/pokemonSlice"


describe("CustomCard Component", () => {
  it("renders correctly", () => {
    const mockData = {
      images: { large: "/path/to/image.png" },
      name: "Pikachu",
      flavorText: "Electric Pokemon",
      cardmarket: { prices: { averageSellPrice: 10 } },
    }

    renderWithStateMgmt(<CustomCard data={mockData} add remove />)

    expect(screen.getByText("Pikachu")).toBeInTheDocument()
    expect(screen.getByText("Electric Pokemon")).toBeInTheDocument()
    expect(screen.getByText("10$")).toBeInTheDocument()
  })

  it("renders correctly without flavor text", () => {
    const mockData = {
      images: { large: "/path/to/image.png" },
      name: "Pikachu",
      cardmarket: { prices: { averageSellPrice: 10 } },
    }
    renderWithStateMgmt(<CustomCard data={mockData} add remove />)

    expect(screen.getByText("Pikachu")).toBeInTheDocument()
    expect(screen.getByText("No description available")).toBeInTheDocument()
    expect(screen.getByText("10$")).toBeInTheDocument()
  })


  it("dispatches the correct action when add button is clicked", () => {
    const mockData = {
      images: { large: "/path/to/image.png" },
      name: "Pikachu",
      cardmarket: { prices: { averageSellPrice: 10 } },
    }

    const { store } = renderWithStateMgmt(
      <CustomCard data={mockData} add />,
      {
        actions: [addPokemon(mockData) as never],
      },
    )

    const addButton = screen.getByRole("button", { name: /add/i })
    fireEvent.click(addButton)

    const etatActuel = store.getState().pokemons.pokemonsInCart;
    expect(etatActuel).toContain(mockData); 
    //   expect(mockDispatch).toHaveBeenCalledWith(addPokemon(mockData))
  })

  it("dispatches the correct action when remove button is clicked", () => {
    const mockData = {
      images: { large: "/path/to/image.png" },
      name: "Pikachu",
      cardmarket: { prices: { averageSellPrice: 10 } },
    }

    const { store } = renderWithStateMgmt(
      <CustomCard data={mockData} add remove />,
      {
        actions: [addPokemon(mockData) as never, removePokemon(mockData) as never],
      },
    )

    const addButton = screen.getByRole("button", { name: /add/i })
    fireEvent.click(addButton)

    const etatActuel = store.getState().pokemons.pokemonsInCart;
    expect(etatActuel).toContain(mockData);

    const removeButton = screen.getByRole("button", { name: /remove/i })
    fireEvent.click(removeButton)

    const etatActuel2 = store.getState().pokemons.pokemonsInCart;
    expect(etatActuel2).not.toContain(mockData);
  })

})
