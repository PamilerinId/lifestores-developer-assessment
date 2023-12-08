import { cartItemsVar } from "./cache";
import { useReactiveVar } from "@apollo/client";
import { Button, GridItem, Text  } from "@chakra-ui/react";


function StoreItem({item}) {
    console.log(item)
    const CartItems = useReactiveVar(cartItemsVar);

    const sku = item.sku;

    let isInCart = CartItems.some(item => item.sku === sku)

    return (
        <GridItem bg='blue.700' p={"4"}>
         <Text>{item.name}</Text>
         <Text fontSize="xs">{item.description}</Text>
         <Text fontSize="xs">₦{item.price}</Text>
         <Button
            onClick={() => {
                cartItemsVar(
                    isInCart ? CartItems.filter(item => item.sku !== sku) : 
                    [...CartItems, item]
                )
            }}
            size={"xs"}
            textColor={"black"}
            >
            { isInCart ? ("Remove from cart") : ("Add to cart")}
         </Button>
        </GridItem>
    )
}

export default StoreItem;