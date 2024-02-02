import { Grid } from "@mui/material"
import { Product } from "../../app/models/product"
import ProductCart from "./ProductCard"

interface Props{
    products:Product[],
}

export default function ProductList({products}:Props) {
    return(
        <Grid container spacing={3}>
            {products.map((product) => {
                return (
                    <Grid item xs={4} key={product.id}>
                        <ProductCart product={product} />
                    </Grid>
                    )
            })}
        </Grid>
    )
}