For customers - https://food-delivery-frontend-ihvh.onrender.com/
For admin - https://food-delivery-admin-fxb0.onrender.com/
it takes few seconds for products to load / server to responds 

# E-Commerce Food Delivery Web App

A full-stack food delivery platform that allows customers to browse food items, place orders, make online payments, and track order progress. The application includes a dedicated admin dashboard for managing food listings and customer orders.

## Project Overview

The project is divided into three independent applications:

- **Customer Frontend:** Provides the interface for browsing food items, placing orders, and accessing customer features.
- **Backend API:** Handles business logic, authentication, database operations, order management, and payment integration.
- **Admin Dashboard:** Allows administrators to manage food listings and process customer orders.

## Features

### Customer Application

- Browse available food items.
- Navigate through the application using client-side routing.
- Place food orders and manage the ordering workflow.
- Make online payments through Stripe integration.
- Access protected features using JWT-based authentication.
- View order listings and check delivery status.
- Communicate with backend services through REST APIs.

### Admin Dashboard

- Access a dedicated administrative interface.
- Manage food listings and related information.
- View and manage customer orders.
- Update order statuses throughout the order-processing workflow.
- Receive feedback for administrative actions through toast notifications.

### Backend and Security

- RESTful API development using Node.js and Express.js.
- MongoDB integration through Mongoose.
- JWT-based authentication for protected requests.
- Password hashing using bcrypt.
- Request and input validation using Validator.
- Image and file upload handling using Multer.
- Cross-origin request configuration using CORS.
- Environment-based configuration using dotenv.
- Stripe integration for online payment processing.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building interactive user interfaces |
| Vite | Frontend development server and build tooling |
| React Router | Client-side navigation |
| Axios | HTTP requests to backend APIs |
| Node.js | Backend JavaScript runtime |
| Express.js | REST API and server-side routing |
| MongoDB | Database for application data |
| Mongoose | MongoDB object modeling |
| JSON Web Token (JWT) | Authentication and protected access |
| bcrypt | Password hashing |
| Stripe | Online payment integration |
| Multer | File and image upload handling |
| Validator | Input validation |
| React Toastify | Admin dashboard notifications |
| dotenv | Environment variable management |

## Project Architecture

The application follows a separated frontend, backend, and admin architecture.

```text
food-delivery-app/
├── frontend/
│   ├── package.json
│   └── src/
├── backend/
│   ├── package.json
│   └── server.js
└── admin/
    ├── package.json
    └── src/
```

*Note: This is a representative structure based on the three supplied package files. Adjust directory and source file names to match your actual project.*

### Application Flow

1. Customers interact with the frontend to browse food and place orders.
2. The frontend sends HTTP requests to the backend API using Axios.
3. The backend validates requests, checks authentication where required, and processes application logic.
4. MongoDB stores application data through Mongoose.
5. Stripe handles the online payment workflow.
6. The admin dashboard communicates with the backend to manage food listings and customer orders.
7. Order-status updates are reflected in the customer-facing order interface when the application retrieves the latest status.

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) local installation or a MongoDB Atlas database
- A [Stripe account](https://stripe.com/) for payment integration
- Git, if cloning the repository

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

Replace the placeholders with your actual repository URL and project directory.

### 2. Configure the Backend

Navigate to the backend directory and install dependencies.

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and configure the environment variables required by your application.

Example configuration template:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

These variable names are illustrative. Use the exact names referenced in your backend source code. Add any additional configuration required by your implementation.

**Security:** Never commit real credentials, JWT secrets, or Stripe secret keys to version control. Add `.env` to `.gitignore`.

Start the backend development server:

```bash
npm run server
```

This command uses the script defined in the supplied backend `package.json` and runs `server.js` through Nodemon.

### 3. Configure the Customer Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite starts the frontend development server and displays the local URL in the terminal.

If the frontend requires a backend API URL, configure it using the environment variable name expected by your application.

### 4. Configure the Admin Dashboard

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

Vite starts the admin dashboard development server. Check the terminal for its local URL.

**Important:** Run the customer frontend, backend, and admin dashboard in separate terminals. Configure the frontend and admin API URLs, backend CORS settings, MongoDB connection, and Stripe credentials according to your source code.

## Available Scripts

### Customer Frontend

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the frontend for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

### Backend

| Command | Description |
|---|---|
| `npm run server` | Starts `server.js` using Nodemon |

### Admin Dashboard

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the admin application for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

## Authentication and Payments

### Authentication

The backend includes dependencies for JWT-based authentication and bcrypt password hashing. Authenticated routes should validate incoming tokens and enforce appropriate authorization checks.

### Payment Processing

Stripe is used for payment integration. Configure the appropriate Stripe credentials and ensure payment confirmation is verified on the backend before treating an order as paid.

The exact payment flow, webhook configuration, and payment methods depend on the implementation in the source code.

## Order Management and Delivery Tracking

The intended order workflow includes:

1. Customer selects food items and places an order.
2. Backend processes the order and associated payment workflow.
3. The order appears in the administrative order listing.
4. An administrator updates the order status as it progresses.
5. The customer views the latest available order and delivery status.

This describes application-level order-status tracking. Live GPS tracking, driver location updates, and real-time notifications require additional implementation if they are part of the intended feature set.

## Troubleshooting

- **Backend fails to start:** Verify the Node.js installation, installed dependencies, environment variables, and MongoDB connection.
- **Database connection errors:** Check the MongoDB URI and database availability.
- **Frontend cannot reach the backend:** Verify the API base URL, backend port, and CORS configuration.
- **Authentication errors:** Confirm that the frontend sends the expected JWT and that the backend validates it correctly.
- **Payment errors:** Verify Stripe configuration and check the backend logs for payment-related failures.
- **Admin dashboard errors:** Confirm that the backend is running and that the admin API configuration is correct.

## Future Improvements

Potential enhancements include:

- Real-time order-status updates.
- Live delivery tracking using maps and location services.
- Customer order history and reorder functionality.
- Advanced food search, filtering, and categorization.
- Order notifications and email confirmations.
- Role-based access control for customers and administrators.
- Automated tests for authentication, order processing, and payment workflows.
- Production deployment with secure environment configuration.

## License

# E-Commerce Food Delivery Web App

A full-stack food delivery platform that allows customers to browse food items, place orders, make online payments, and track order progress. The application includes a dedicated admin dashboard for managing food listings and customer orders.

## Project Overview

The project is divided into three independent applications:

- **Customer Frontend:** Provides the interface for browsing food items, placing orders, and accessing customer features.
- **Backend API:** Handles business logic, authentication, database operations, order management, and payment integration.
- **Admin Dashboard:** Allows administrators to manage food listings and process customer orders.

## Features

### Customer Application

- Browse available food items.
- Navigate through the application using client-side routing.
- Place food orders and manage the ordering workflow.
- Make online payments through Stripe integration.
- Access protected features using JWT-based authentication.
- View order listings and check delivery status.
- Communicate with backend services through REST APIs.

### Admin Dashboard

- Access a dedicated administrative interface.
- Manage food listings and related information.
- View and manage customer orders.
- Update order statuses throughout the order-processing workflow.
- Receive feedback for administrative actions through toast notifications.

### Backend and Security

- RESTful API development using Node.js and Express.js.
- MongoDB integration through Mongoose.
- JWT-based authentication for protected requests.
- Password hashing using bcrypt.
- Request and input validation using Validator.
- Image and file upload handling using Multer.
- Cross-origin request configuration using CORS.
- Environment-based configuration using dotenv.
- Stripe integration for online payment processing.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building interactive user interfaces |
| Vite | Frontend development server and build tooling |
| React Router | Client-side navigation |
| Axios | HTTP requests to backend APIs |
| Node.js | Backend JavaScript runtime |
| Express.js | REST API and server-side routing |
| MongoDB | Database for application data |
| Mongoose | MongoDB object modeling |
| JSON Web Token (JWT) | Authentication and protected access |
| bcrypt | Password hashing |
| Stripe | Online payment integration |
| Multer | File and image upload handling |
| Validator | Input validation |
| React Toastify | Admin dashboard notifications |
| dotenv | Environment variable management |

## Project Architecture

The application follows a separated frontend, backend, and admin architecture.

```text
food-delivery-app/
├── frontend/
│   ├── package.json
│   └── src/
├── backend/
│   ├── package.json
│   └── server.js
└── admin/
    ├── package.json
    └── src/
```

*Note: This is a representative structure based on the three supplied package files. Adjust directory and source file names to match your actual project.*

### Application Flow

1. Customers interact with the frontend to browse food and place orders.
2. The frontend sends HTTP requests to the backend API using Axios.
3. The backend validates requests, checks authentication where required, and processes application logic.
4. MongoDB stores application data through Mongoose.
5. Stripe handles the online payment workflow.
6. The admin dashboard communicates with the backend to manage food listings and customer orders.
7. Order-status updates are reflected in the customer-facing order interface when the application retrieves the latest status.

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) local installation or a MongoDB Atlas database
- A [Stripe account](https://stripe.com/) for payment integration
- Git, if cloning the repository

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

Replace the placeholders with your actual repository URL and project directory.

### 2. Configure the Backend

Navigate to the backend directory and install dependencies.

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and configure the environment variables required by your application.

Example configuration template:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

These variable names are illustrative. Use the exact names referenced in your backend source code. Add any additional configuration required by your implementation.

**Security:** Never commit real credentials, JWT secrets, or Stripe secret keys to version control. Add `.env` to `.gitignore`.

Start the backend development server:

```bash
npm run server
```

This command uses the script defined in the supplied backend `package.json` and runs `server.js` through Nodemon.

### 3. Configure the Customer Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite starts the frontend development server and displays the local URL in the terminal.

If the frontend requires a backend API URL, configure it using the environment variable name expected by your application.

### 4. Configure the Admin Dashboard

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

Vite starts the admin dashboard development server. Check the terminal for its local URL.

**Important:** Run the customer frontend, backend, and admin dashboard in separate terminals. Configure the frontend and admin API URLs, backend CORS settings, MongoDB connection, and Stripe credentials according to your source code.

## Available Scripts

### Customer Frontend

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the frontend for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

### Backend

| Command | Description |
|---|---|
| `npm run server` | Starts `server.js` using Nodemon |

### Admin Dashboard

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the admin application for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

## Authentication and Payments

### Authentication

The backend includes dependencies for JWT-based authentication and bcrypt password hashing. Authenticated routes should validate incoming tokens and enforce appropriate authorization checks.

### Payment Processing

Stripe is used for payment integration. Configure the appropriate Stripe credentials and ensure payment confirmation is verified on the backend before treating an order as paid.

The exact payment flow, webhook configuration, and payment methods depend on the implementation in the source code.

## Order Management and Delivery Tracking

The intended order workflow includes:

1. Customer selects food items and places an order.
2. Backend processes the order and associated payment workflow.
3. The order appears in the administrative order listing.
4. An administrator updates the order status as it progresses.
5. The customer views the latest available order and delivery status.

This describes application-level order-status tracking. Live GPS tracking, driver location updates, and real-time notifications require additional implementation if they are part of the intended feature set.

## Troubleshooting

- **Backend fails to start:** Verify the Node.js installation, installed dependencies, environment variables, and MongoDB connection.
- **Database connection errors:** Check the MongoDB URI and database availability.
- **Frontend cannot reach the backend:** Verify the API base URL, backend port, and CORS configuration.
- **Authentication errors:** Confirm that the frontend sends the expected JWT and that the backend validates it correctly.
- **Payment errors:** Verify Stripe configuration and check the backend logs for payment-related failures.
- **Admin dashboard errors:** Confirm that the backend is running and that the admin API configuration is correct.

## Future Improvements

Potential enhancements include:

- Real-time order-status updates.
- Live delivery tracking using maps and location services.
- Customer order history and reorder functionality.
- Advanced food search, filtering, and categorization.
- Order notifications and email confirmations.
- Role-based access control for customers and administrators.
- Automated tests for authentication, order processing, and payment workflows.
- Production deployment with secure environment configuration.

## License

MIT License

Copyright (c) [2026] [rakesh paramanick]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

