import { Grid, Pagination } from "@mui/material"
import React, { useEffect, useState } from "react"
import CustomCard from "./CustomCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../app/store"
import SearchBar from "./SearchBar"

const ViewGrid = ({ settings }: { settings: any }) => {
  const styles = {
    containerGrid: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    grid: {
      display: "flex",
      justifyContent: "flex-start",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
    },
  }

  const dispatch = useDispatch<AppDispatch>()
  const [limit, setLimit] = useState<number>(12)
  const [offset, setOffset] = useState<number>(1)
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    dispatch(settings.fetch({ limit: limit, offset: offset, search }))
  }, [dispatch, limit, offset])

  const data = useSelector((state: any) => state.pokemons.data)
  const loading = useSelector((state: any) => state.pokemons.loading)
  const error = useSelector((state: any) => state.pokemons.error)

  const onSearchUpdate = (search: string) => {
    console.log("onSearchUpdate", search)
    setSearch(search)
    dispatch(settings.fetch({ limit: limit, offset: offset, search }))
  }

  const handlePagination = (e: any) => {
    console.log("handlePagination", e.target.innerText)
    setOffset(e.target.innerText)
  }

  return (
    <div style={styles.containerGrid}>
      <SearchBar onInputChange={onSearchUpdate} />
      <Grid
        style={styles.grid}
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data &&
          data.map((item: any, index: number) => (
            <Grid item key={index}>
              <CustomCard data={item} add />
            </Grid>
          ))}
      </Grid>
      <Pagination style={styles.pagination} onChange={(e) => handlePagination(e)} count={10} />
    </div>
  )
}

export default ViewGrid
