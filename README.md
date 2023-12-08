# developer-assessment
A technical assessment exercise for Developer candidates

## How to Run project
- cd `api/` folder
- update `.env.dev` file to `.env`
- cd ..
- run `docker compose up`
- run `python manage.py loaddata products` inside `api` container or 
- access `graphql api` at `localhost:8000/graphql`
- access `frontend` at `localhost:3000`

## Technologies

#### Frontend
- REACTJS
- Context API
- GRAPHQL

### Backend
- Django
- Graphene
- Docker

### DB
- Postgre


### Steps
- Formatted and cleaned sample data
- Spin up Django / Graphene
- Dockerise api
- Seed db with sample data
- Spin up react / apollo


### Directory structure

  - File `docker-compose.yml`: Orchestrate all containers settings
  - Directory `dockerfiles`: 
    - File `backend`: Dockerfile to setup Django
    - File `frontend`: Dockerfile to install Reactjs requirements
  - File `README.md`: You are here :)
  - Directory :
    - Directory `api`: Here is the Django + Graphene project.
    - Drirectory `frontend`: Here is the React project.


##### Test:
Given the Product data below: 

```
[
    {
        "name":"Paracetamol",
        "description":"Paracetamol (acetaminophen) is a pain reliever and a fever reducer",
        "sku":"8HE902",
        "price":300,
        "image":"https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"
    },
    {
        "name":"Prednisolone",
        "description":"Prednisolone is a corticosteroid (cortisone-like medicine or steroid). It works on the immune system to help relieve swelling, redness, itching, and allergic reactions",
        "sku":"8HE809",
        "price":600,
        "image":"https://5.imimg.com/data5/RU/SX/JJ/SELLER-109604861/prednisolone-tablet-500x500.jpg"
    },
    {
        "name":"Lumefantrine",
        "description":"Lumefantrine is an antimalarial agent used to treat acute uncomplicated malaria.",
        "sku":"8HE809",
        "price":1200,
        "image":"https://i1.wp.com/nimedhealth.com.ng/wp-content/uploads/2020/09/IMG_20200920_082326-1.jpg?fit=2487%2C1599&ssl=1"
    },
    {
        "name":"Coflin",
        "description":"Coflin Is Used To Treat Coughs And Congestion Caused By The Common Cold, Bronchitis, And Other Breathing Illnesses.",
        "sku":"8HE809",
        "price":1200,
        "image":"https://www.m-medix.com/2677-large_default/dr-meyers-coflin-expectorant-100ml.jpg"
    }
]
```

Using Python, Graphene, Docker, etc.
a) Create a Product model
b) Create a command to migrate the products data above into the database
c) Create a GraphQL endpoint to return all the products to the FE
d) Encapsulate your back-end services in docker containers

Using React, Context API, and GraphQL
a) Create a products page to show the GraphQL fetched products in cards with appropriate product data(name, price, pictures, etc.)
b) Each product should have an "Add to cart" button
c) On click add to cart, show cart summary component as an overlay and add the product to the cart.
d) Allow increment(+), decrement(-) and delete functionality on each cart item in the cart

Once complete share instructions on how we can review the code and run
the application.


