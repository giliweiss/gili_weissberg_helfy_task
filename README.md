File Structure

What to Submit
1. GitHub Repository: Create a public repository with the name format: firstname_lastname_helfy_task
(e.g., avi_cohen_helfy_task )
2. Submit the GitHub repository link
3. Complete source code for both frontend and backend in the repository
4. README.md in the repository root with:
Setup and installation instructions
task-manager/
├── backend/
│ ├── package.json
│ ├── server.js
│ ├── routes/
│ └── middleware/
├── frontend/
│ ├── package.json
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── styles/
│ │ └── App.js
├── .gitignore
└── README.md


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en) 
  - Version 20.x or higher required (latest LTS recommended)
- `npm` (will be typically installed automatically when you install Node.js above)
  -  Version 10.x or higher required (get the latest by running `npm install -g npm@latest --no-optional`)

### Server Setup
1. Navigate to the server directory: `cd server`
1. Install server dependencies: `npm install`

### Client Setup
1. Navigate to the client directory: `cd ../client`
1. Install client dependencies: `npm install`

## Configuration

### Environment Variables
Environment variables are used to configure your application without hardcoding sensitive information into your code. For this project, you need to set up the following environment variables in `.env` files located both in the `server` directory and `client` directory.

#### Configure the Backend (server)

Make a copy of the `.env.example` file under the `server` folder and name it `.env`. This file contains the following environment variables (you don't need to touch them at this point):
   - `CLIENT_URL` - this should match the URL of the client, which is what you'll see at the address bar of your browser after running your client (via `npm start`).
   - `PORT` - This variable defines the port on which your Express server will run. By default, this is set to `5000`, but you can change it to any available port number.

#### Configure the Frontend (client)

Make a copy of the `.env.example` file under the `client` folder and name it `.env`. 
This file contains the following environment variable (you don't need to touch them at this point):

* `VITE_SERVER_API_URL`: This variable contains the URL of your backend API. It tells your client where to send requests to interact with the server. By default, this should be set to http://localhost:5000/, but you should change it to match your server's actual URL if different (where 5000 is the `PORT` you defined in the server `.env` file above).

## Usage

This section explains how to use the application once it’s set up and configured. Follow these steps to interact with both the client and server components of the application.

### Start the Server
1. Open a terminal in the root folder of the cloned repository, and navigate to the `server` directory: `cd server`
1. Start the Express server in development mode: `npm run dev`
   - By default, the server will run on `http://localhost:5000` (see configuration section above)

### Run the Client
1. Open a **new** terminal in the root folder of the cloned repository, and navigate to the `client` directory: `cd client`

2. Run the Frontend Client: `npm run dev`
   - A new browser window with the client application should open (if you close the tab, you can return to it by navigating to http://localhost:3000/ by default)

