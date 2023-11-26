// SearchBar.test.jsx
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test } from "@jest/globals"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import DetailPage from "../pages/DetailPage"
import { renderWithStateMgmt } from "./config"

describe("Navigation test", () => {
  it("Renders the Detail Page", () => {
    const { getByText } = renderWithStateMgmt(
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>,
    )

    const button = getByText(/Cart is empty/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
