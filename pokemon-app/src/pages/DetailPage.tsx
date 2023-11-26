import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import CustomCard from "../components/CustomCard"
import CartList from "../components/CartList"

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
      <Grid style={styles.grid} container>
        <Grid xs={12} sm={9} item>
          <Grid
            style={styles.grid}
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data && data.length ? (
              data.map((item: any, index: number) => (
                <Grid item key={index}>
                  <CustomCard data={item} remove />
                </Grid>
              ))
            ) : (
              <Grid item>
                <h1>Cart is empty</h1>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid xs={0} sm={3} item>
          <CartList pay/>
        </Grid>
      </Grid>
    </div>
  )
}

export default DetailPage
