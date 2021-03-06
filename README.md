# Youtube Downloader Project
A simple project to download youtube videos from web interface made with React. Inspired by the [Javascript in Plainenglish tutorial](https://javascript.plainenglish.io)

## Project structure
The project is divided into 3 separate parts:
- **Frontend**: The frontend is made with React.
- **Backend**: The backend is made with Node.js.

## Backend
The backend is made with Node.js. It is a simple Node.js server that handles the requests from the frontend. It works with Redis (to manage the download queue) and MongoDB (database of current downloads). 

## Frontend
The frontend is made with React. It is a simple web interface that allows the user to download videos from youtube. The interface communicates directly with the API to send videos for download. 

## Installation
To start the project, you need to install Docker and Docker Compose on your computer.
Edit the ``docker-compose.yml`` file and change the variable settings with your information. The required environments are : 
- **REDIS_HOST**: The host of the Redis server.
- **REDIS_PORT**: The port of the Redis server.
- **REDIS_PASSWORD**: The password of the Redis server.
- **MONGO_DB**: The host of the MongoDB server.

Once installed, run the command ```docker-compose up --build``` to run the project or ``docker-compose up -d --build`` to run it in the background.
Then you can open your browser on ``http://localhost:80`` to see the interface.