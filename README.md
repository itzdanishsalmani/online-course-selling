A comprehensive course-selling website with robust features, built on the MERN stack (Node.js, Express.js, MongoDB, and React).

Explore the live application: 🚀✨
- Client :-  https://hyperdev.vercel.app/

- Backend :- https://hyperdev-server.vercel.app/

Paypal account credential for using
email    : buyerfrompaypal@personal.example.com  
password : paypal123

## Admin

1. Accessing the admin section of the course-selling app.
2. Admins can effortlessly log in or create a new account.
3. All administrators have the authority to:
   ✅ CREATE courses
   ✏️ UPDATE courses
   ❌ DELETE courses

## User

1. Exploring the learner interface of the course-selling app.
2. Learners can easily log in or register a new account.
3. Users have the opportunity to explore and acquire knowledge from a diverse array of courses.
4. Users can make payments and can smoothly make purchases for their desired courses!💡

## Developed Using

1. React.js
2. Node.js
3. Express.js
4. MongoDB Atlas
5. TailwindCSS
6. PayPal Payment Gateway
7. Vite.js

## Quick Start

To set up a local copy of HyperDev, follow these simple steps:

## Prerequisites

Ensure that Node.js and npm are installed on your machine.

## Development

1. Fork the repository to your profile.
2. Clone your repository by running the following command in your terminal:
   ```sh
   git clone <your-repository-url>
   ```

### Server Setup

1. Change directory to the root of the cloned repository
   ```sh
   cd online-course-selling
   ```
2. Change directory to the server folder
   ```sh
   cd server
   ```
3. Install the required npm packages
   ```sh
   npm install
   ```
4. Create .env file and add DB_NAME and SECRET
   ```sh
   JWT_SECRET=YOUR_SECRET_KEY
   DB_CONNECT=mongodb+srv://<name:password>@cluster0.1uxyuwe.mongodb.net/project
   CLIENT_ID=PAYPAL_CLIENTID
   CLIENT_SECRET=PAYPAL_SECRRETID
   ```
5. Start the server
   ```sh
   npm start
   ```

### Client Setup

1. Change directory to the Client-user folder
   ```sh
   cd ../client
   ```
2. Install the required npm packages for the admin client
   ```sh
   npm install
   ```
3. Run the client in development mode
   ```sh
   npm run dev
   ```
