# DiscountPRO E-commerce Platform

DiscountPRO is an e-commerce platform that offers users discounts on a wide range of products. The platform includes features like user authentication, a shopping cart, product pages, a profile section, and more.

<div align="center">
  <img  width="full" src="https://i.ibb.co.com/twxY8TVp/website3.png"  />
</div>

## Features

- **User Authentication**: Sign up, login, and logout functionality using Firebase Authentication.
- **Product Pages**: View different product categories and individual products with their details.
- **Responsive Design**: The platform is fully responsive, providing an optimized experience for mobile, tablet, and desktop devices.
- **User Profile**: Users can view and update their profile information.
- **Product Filtering**: Filter products by category or brand.

## Tech Stack

- **Frontend**: 
  - React
  - React Router
  - Tailwind CSS
  - Firebase for authentication
  - React Context API for state management
- **Backend**: 
  - Firebase (used for authentication and storing user data

## Dev Dependencies
  - "@tanstack/react-table": "^8.20.6",
  - "axios": "^1.7.9",
   - "firebase": "^11.1.0",
   - "framer-motion": "^11.15.0",
   - "localforage": "^1.10.0",
   - "lottie-react": "^2.4.0",
   - "match-sorter": "^8.0.0",
   - "react": "^18.3.1",
   - "react-dom": "^18.3.1",
   - "react-icons": "^5.4.0",
   - "react-loading-skeleton": "^3.5.0",
   - "react-router-dom": "^7.1.0",
   - "sort-by": "^1.2.0",
   - "sweetalert2": "^11.15.3"

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Firebase Account](https://firebase.google.com/)

### Steps

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/farihaa1/coupon-collector.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Coupon-collector
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a Firebase project:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project and enable Firebase Authentication.
    - Set up Firestore Database if you are planning to store product data there.
    - Get the Firebase configuration details (API keys and other info) from the Firebase console.

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and go to `http://localhost:5000`.



