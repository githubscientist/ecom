# FSD Demo

## Session: 1

- Introduction to Full Stack Development
- Technology Stack
- Application: E-Commerce
- User Stories
- Tasks
- Backend Setup

## Session: 2

- Frontend Setup

## Session: 3

- Frontend Development (Contd..)
- Deployment

## Session: 1

### Full Stack Development

List of technologies used to develop a web application covering all the components(Frontend, Backend) of the application is called Full Stack Development.

### Technology Stack

- Frontend: HTML, CSS, JavaScript, React, Redux, TailwindCSS
- Backend: NodeJS, Express, MongoDB

### Application: E-Commerce

### Features

#### User

- User Registration
- User Login
- User Logout
- Product List
- Product Details
- Add to Cart
- Checkout/Place Order

#### Admin

- Admin Login
- Admin Logout
- Product List
- Product Add
- Product Update
- Product Delete
- Order List
- Order Update
- Order Delete
- User List
- User Update
- User Delete

### User Stories

- As a User, I should be able to register on the application.
- As a User, I should be able to login into the application.
- As a User, I should be able to logout from the application.
- As a User, I should be able to view the list of products.
- As a User, I should be able to view the details of a product.
- As a User, I should be able to add a product to the cart.
- As a User, I should be able to place an order.

- As an Admin, I should be able to login into the application.
- As an Admin, I should be able to logout from the application.
- As an Admin, I should be able to view the list of products.
- As an Admin, I should be able to add a product.
- As an Admin, I should be able to update a product.
- As an Admin, I should be able to delete a product.
- As an Admin, I should be able to view the list of orders.
- As an Admin, I should be able to update an order.
- As an Admin, I should be able to delete an order.
- As an Admin, I should be able to view the list of users.
- As an Admin, I should be able to update a user.
- As an Admin, I should be able to delete a user.

### Tasks

- Setup Backend
- Setup Frontend
- User Registration
  - Create an API to register a user
  - Create a form to register a user
- User Login
  - Create an API to login a user
  - Create a form to login a user
- User Logout
  - Create an API to logout a user
- Product List
  - Create an API to get the list of products
  - Create a page to display the list of products
- Product Details
  - Create an API to get the details of a product
  - Create a page to display the details of a product
- Add to Cart
  - Create an API to add a product to the cart
  - Create a page to display the cart
- Checkout/Place Order
  - Create an API to place an order
  - Create a page to place an order

### Backend API Routes

#### Auth routes

POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/auth/logout
GET /api/v1/auth/me

#### Product routes

#### Allowed for Users

GET /api/v1/products
GET /api/v1/products/:id

#### Allowed for Admin

POST /api/v1/products
PUT /api/v1/products/:id
DELETE /api/v1/products/:id

#### Order routes

##### Allowed only for Admin

GET /api/v1/orders
GET /api/v1/orders/:id
PUT /api/v1/orders/:id
DELETE /api/v1/orders/:id

#### Allowed for User

POST /api/v1/orders
PUT /api/v1/orders/:id - Cancel Order

#### User routes

##### Allowed only for Admin

GET /api/v1/users
GET /api/v1/users/:id
PUT /api/v1/users/:id
DELETE /api/v1/users/:id

Product Schema

```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "image": "string",
  "category": "string",
  "stock": "number"
}
```

Example Data:

```json
{
  "name": "Laptop",
  "description": "Lenovo Laptop",
  "price": 50000,
  "image": "laptop.jpg",
  "category": "Electronics",
  "stock": 10
}
```

```json
{
  "name": "Mobile",
  "description": "OnePlus Mobile",
  "price": 30000,
  "image": "mobile.jpg",
  "category": "Electronics",
  "stock": 20
}
```

```json
{
  "name": "Shirt",
  "description": "Peter England Shirt",
  "price": 2000,
  "image": "shirt.jpg",
  "category": "Clothing",
  "stock": 30
}
```

```json
{
  "name": "Shoes",
  "description": "Nike Shoes",
  "price": 5000,
  "image": "shoes.jpg",
  "category": "Footwear",
  "stock": 40
}
```