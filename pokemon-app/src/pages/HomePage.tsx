import { fetchPokemons } from "../features/pokemon/pokemonSlice"
import ViewGrid from "../components/ViewGrid"
import CartList from "../components/CartList"
import { Grid } from "@mui/material"

const HomePage = () => {
  const settings = {
    fetch: (params: any) => fetchPokemons({ params }),
    title: "Pokemon",
  }

  return (
    <Grid
      // style={style.grid}
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid xs={12} sm={9} item>
        <ViewGrid settings={settings} />
      </Grid>
      <Grid xs={0} sm={3} item>
        <CartList />
      </Grid>
    </Grid>
  )
}

export default HomePage
