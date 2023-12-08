import { gql, useQuery } from "@apollo/client";

const GET_CART_ITEMS = gql`
    query getProductList {
        productList {
          id
          name
          description
          image
          price
          sku
          updatedAt
        }
      }
`


function Cart() {
    const { loading, error, data } = useQuery(GET_CART_ITEMS);

    if (loading) return "Loading Cart!";
    if (error) return <p>ERROR: {error.message}</p>

    return (
        <p>
            <h4>My Cart</h4>
            {data && data.cartItems.length === 0 ? (
                <p>there are no Items in your cart!</p>
                ) : (
                    <ul style={{listStyle: "none"}}>
                        {data && data.cartItems.map((item) =>(
                            <li key={item.sku}> {item.name}</li>
                        )) }
                    </ul>
                )
            }
        </p>
    )
}


export default Cart;