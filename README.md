# Shortify

## Tech Stack
- **Backend:** ExpressJs, NodeJS, JavaScript
- **Database:** MongoDB, Atlas, Mongoose
- **Authentication:** JWT Auth

## Project Description
Shortify is a link shortener application that allows users to create short links for easier sharing and tracking. The project includes integrated analytics to monitor total clicks and user engagement, and uses JSON Web Tokens (JWT) for secure user authentication and authorization. The application provides both a simple user interface and a REST API for ease of use and integration.

## Features
- **Link Shortening:** Create short, easy-to-share links.
- **Analytics:** Track total clicks and user engagement for each short link.
- **Authentication:** Secure user authentication and authorization using JWT.
- **User Interface:** Simple and intuitive UI for creating and managing short links.
- **REST API:** Fully-featured REST API for integration with other applications.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/adipshr/express-link-shortener
    cd shortify
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

## Usage

- **Creating a Short Link:**
    1. Sign up or log in.
    2. Enter the original URL.
    3. Click the "Shorten" button.
    4. The short link will be generated and displayed.

- **Tracking Analytics:**
    1. Navigate to your dashboard.
    2. View total clicks and user engagement for each short link.
