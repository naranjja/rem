# :mens: naked-mern
Minimalistic MERN boilerplate to bootstrap a general purpose PWA

### Requirements
- [Node.js](https://nodejs.org/en/download/)

### Installation
- Run `npm i` to install all dependencies.

### Configuration
- Run `npm run addUser -- <username> <password>` to create a user (necessary for login).
- Make `.env` file using `.env.example` as a guide.

## Development
- `npm run` `dev`

This mode runs hot module reloading on React.js frontend (as a server) on port 3000, and Nodemon with server watching on Express backend on port 5000. The React.js development server proxies all API calls to backend. It does not check for authenticated sessions before rendering.

## Production
- `npm run` `prod`

This mode builds React.js frontend using Webpack and then serves it on an Express server running on port 80.

---

## Credits
Put together by Jose Naranjo.