import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../app/store"
import { addPokemon, removePokemon } from "../features/pokemon/pokemonSlice"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import DeleteIcon from "@mui/icons-material/Delete"

const CustomCard = ({ data, add = false, remove = false }: { data: any; add?: boolean, remove?: boolean }) => {
  console.log("CARD: ", data)
  const dispatch = useDispatch<AppDispatch>()

  const styles = {
    card: {
      backgroundImage: 'url("/assets/pokeball.png")',
      backgroundSize: "50px 50px",
      backgroundPosition: "bottom right",
      backgroundRepeat: "no-repeat",
    },
    image: {
      width: "60%",
      height: "auto",
      borderRadius: "5px",
    },
    description: {
      height: "60px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }

  const addToCart = () => {
    console.log("Add to cart", data)
    dispatch(addPokemon(data))
  }

  const removeFromCart = () => {
    console.log("Remove from cart", data)
    dispatch(removePokemon(data))
  }

  return (
    <Card style={styles.card} sx={{ maxWidth: 330 }}>
      <div>
        <img style={styles.image} src={data.images.large} alt="image" />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography
          style={styles.description}
          variant="body2"
          color="text.secondary"
        >
          {data.flavorText ? data.flavorText : "No description available"}
        </Typography>
      </CardContent>
      <CardActions>
        {add ? (
          <IconButton aria-label="add" onClick={() => addToCart()}>
            <AddShoppingCartIcon />
          </IconButton>
        ) : null}
        {remove ? (
          <IconButton aria-label="remove" onClick={() => removeFromCart()}>
            <DeleteIcon />
          </IconButton>
        ) : null}
        <Button disabled size="small">
          {data.cardmarket.prices.averageSellPrice}$
        </Button>
      </CardActions>
    </Card>
  )
}

export default CustomCard
