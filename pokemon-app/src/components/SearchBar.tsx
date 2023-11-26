import { TextField } from "@mui/material"
import React, { useEffect, useState } from "react"

export default function SearchBar({
  onInputChange,
}: {
  onInputChange: (input: string) => void
}) {
  const style = {
    bar: {
      background: "linear-gradient(135deg, #cdcfdc 50%, #333333 50%)",
      padding: "20px 0",
      height: "50px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      marginBottom: "20px",
      borderRadius: "5px",
    },
    input: {
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
    },
    left: {
      display: "flex",
      alignItems: "center",
      width: "60%",
    },
  }
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    onInputChange(search)
  }, [search])

  return (
    <div style={style.bar}>
      <div style={style.left}>
        <img
          style={{ width: "100px", height: "auto" }}
          src="/assets/logo.png"
          alt="pokeball"
        />
        <TextField
          style={style.input}
          id="search-bar"
          data-testid="search-bar"
          label="Search pokemon..."
          color="error"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <img
        style={{ width: "100px", height: "auto" }}
        src="/assets/logo.png"
        alt="pokeball"
      />
    </div>
  )
}
