# Basic Auth System with JWT

A complete, persistent Authentication System built with Node.js, Express, MongoDB, and Vanilla JS.

## 📂 Project Structure
We have transformed the initial single-file script into a professional MVC-style architecture:

*   **`app.js`**
    *   **Role:** The server entry point.
    *   **What it does:** Connects to MongoDB, configures middleware, serves the frontend (`public/`), and mounts the auth routes.
*   **`routes/auth.js`**
    *   **Role:** The Logic (Controller).
    *   **What it does:** Handles `POST /signup` (hashing passwords), `POST /login` (checking credentials & issuing JWTs), and `GET /profile` (verifying tokens).
*   **`models/User.js`**
    *   **Role:** The Database Schema.
    *   **What it does:** Defines that a User must have an `email` and a `password`.
*   **`public/index.html`**
    *   **Role:** The Frontend.
    *   **What it does:** A simple UI to interact with your API.

## ✅ Features & Accomplished Work
1.  **Fixed Syntax Errors:** Resolved initial codebase issues.
2.  **Refactoring:** Moved logic out of `script.js` into a scalable router system.
3.  **Stability:** Fixed "Zombie Processes" causing port conflicts.
4.  **Dependencies:** Integrated `jsonwebtoken` and `bcrypt` properly.
5.  **Frontend:** Added a working HTML/JS frontend to test flows easily.

## �️ Development Workflow
1.  **Backend First:** We built the Node/Express server and MongoDB models.
2.  **API Testing:** Verified `signup`/`login` logic manually using **Postman**.
3.  **Frontend Integration:** Once the API was stable, we built the `index.html` frontend to interact with it.

## �🚀 How to Run
1.  **Prerequisites:** Ensure you have Node.js and MongoDB installed/running.
2.  **Clone & Install:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    npm start
    ```
    *(You should see "Server started on port 3000" and "MongoDB connected")*
4.  **Open Browser:** Go to `http://localhost:3000`

## 🧪 Testing

*   **Browser:** Open `http://localhost:3000` to use the built-in UI.
*   **Postman:**
    *   **Signup/Login:** `POST` JSON body `{"email": "...", "password": "..."}` to `/auth/signup` or `/auth/login`.
    *   **Profile:** `GET /auth/profile` with header `Authorization: Bearer <token>`.