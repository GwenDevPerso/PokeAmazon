import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import CustomCard from "../components/CustomCard"

const DetailPage = () => {
  const styles = {
    container: {
      padding: "20px",
    },
    grid: {
      display: "flex",
      justifyContent: "flex-start",
      pading: "20px",
    },
  }
  const data = useSelector((state: any) => state.pokemons.pokemonsInCart)

  return (
    <div style={styles.container}>
      <Grid
        style={styles.grid}
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data && data.length ? (
          data.map((item: any, index: number) => (
            <Grid item key={index}>
              <CustomCard data={item} remove/>
            </Grid>
          ))
        ) : (
          <Grid item>
            <h1>Cart is empty</h1>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default DetailPage
