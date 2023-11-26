import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test } from "@jest/globals"
import NavBar from "../components/NavBar"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { createMemoryHistory } from "history"
import { act } from "react-dom/test-utils"

describe("SearchBar Component", () => {
  it("renders correctly", () => {

    act(() => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
    })

    const appbar = screen.getByTestId("logo")

    expect(appbar).toBeInTheDocument()

    const button = screen.getByTestId("navigate-button-1")
    act(() => {
      button.click()
    })
    // expect(history.location.pathname).toBe('/details');
  })
})
