import { render, screen, fireEvent } from "@testing-library/react"
import {describe, expect, test} from '@jest/globals';
import SearchBar from "../components/SearchBar"
import "@testing-library/jest-dom"

describe("SearchBar Component", () => {
  it("renders correctly", () => {
    const onInputChange = jest.fn()
    render(<SearchBar onInputChange={onInputChange} />)

    const textField = screen.getByLabelText(/search pokemon.../i)
    expect(textField).toBeInTheDocument()
  })
})
