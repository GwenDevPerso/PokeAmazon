import { Button, IconButton, Stack } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch, useSelector } from "react-redux"
import { removePokemon } from "../features/pokemon/pokemonSlice"
import { AppDispatch } from "../app/store"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const CartList = () => {
  const styles = {
    stack: {
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      borderRadius: "5px",
      margin: "20px",
      minHeight: "50px",
    },
    item: {
      backgroundColor: "#cdcfdc",
      display: "flex",
      with: "100%",
      height: "50px",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      borderRadius: "5px",
    },
    image: {
      width: "40px",
      height: "auto",
      borderRadius: "5px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "20px",
      flexDirection: "column",
      counter: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      },
      button: {
        backgroundColor: "#ea0011"
      }
    },
  }
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector((state: any) => state.pokemons.pokemonsInCart)
  const [total, setTotal] = useState<number>(0)
  const navigate = useNavigate()

  const removeFromCart = (data: any) => {
    console.log("Remove from cart", data)
    dispatch(removePokemon(data))
  }

  useEffect(() => {
    setTotal(
      data
        .map((item: any) => item.cardmarket.prices.averageSellPrice)
        .reduce((prev: number, curr: number) => prev + curr, 0),
    )
  }, [data])

  const navigateToDetail = () => {
    navigate("/detail");
  }

  return (
    <Stack style={styles.stack} spacing={2}>
      {data && data.length ? (
        data.map((item: any, index: number) => (
          <div style={styles.item} key={item.name + index}>
            <div>
              <img style={styles.image} src={item.images.large} alt="image" />
            </div>
            {item.name} {item.cardmarket.prices.averageSellPrice} $
            <IconButton
              aria-label="delete"
              data-testid={"remove-cart-" + item.name}
              onClick={() => removeFromCart(item)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))
      ) : (
        <> No items in cart</>
      )}
      <div style={styles.footer as React.CSSProperties}>
        <div style={styles.footer.counter}>
          <div>Total: {total} $</div>
          <div>Cartes: {data.length}</div>
        </div>
        <Button style={styles.footer.button} variant="contained" onClick={navigateToDetail}>Checkout</Button>
      </div>
    </Stack>
  )
}

export default CartList
