import './App.css';
import { gql, useQuery } from "@apollo/client";
import { Grid } from "@chakra-ui/react";
import Cart from './Cart';
import StoreItem from './StoreItem';

const GET_PRODUCT_ITEMS = gql`
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

// const data = [
//   {
//       name:"Paracetamol",
//       description:"Paracetamol (acetaminophen) is a pain reliever and a fever reducer",
//       sku:"8HE902",
//       price:300,
//       image:"https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"
//   },
//   {
//       name:"Prednisolone",
//       description:"Prednisolone is a corticosteroid (cortisone-like medicine or steroid). It works on the immune system to help relieve swelling, redness, itching, and allergic reactions",
//       sku:"8HE809",
//       price:600,
//       image:"https://5.imimg.com/data5/RU/SX/JJ/SELLER-109604861/prednisolone-tablet-500x500.jpg"
//   },
//   {
//       name:"Lumefantrine",
//       description:"Lumefantrine is an antimalarial agent used to treat acute uncomplicated malaria.",
//       sku:"8HE807",
//       price:1200,
//       image:"https://i1.wp.com/nimedhealth.com.ng/wp-content/uploads/2020/09/IMG_20200920_082326-1.jpg?fit=2487%2C1599&ssl=1"
//   },
//   {
//       name:"Coflin",
//       description:"Coflin Is Used To Treat Coughs And Congestion Caused By The Common Cold, Bronchitis, And Other Breathing Illnesses.",
//       sku:"8HE808",
//       price:1200,
//       image:"https://www.m-medix.com/2677-large_default/dr-meyers-coflin-expectorant-100ml.jpg"
//   }
// ]

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCT_ITEMS);
  return (
    <div className="App">
      <header className='App-Header'>
        <h1>Medicine Cabinet</h1>
        <Cart />
        <br></br>
        <h2>Product Items</h2>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          {data.map((item) => (
             <StoreItem item={item}/>
            ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;