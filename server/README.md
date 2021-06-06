# Remote music player (Server)

The API for the app.

## Getting started

First read this [doc](../README.md)

## Installing dependencies

First install the server dependencies:

```sh
cd ~/repo/remote-music-player/server
npm install # or
yarn
```

### Configuring the .env file

To configure the `.env` file use the `sample.env` file as reference:

```sh
cd ~/repo/remote-music-player/server
cp -r sample.env .env
vim .env
```

Now edit it:

```sh
# Define the API port
APP_PORT=

# Define the music storage folder, use $HOME to reference to your /home/user
BASE_URL=
```

### An example configuration:

First create the storage folder:

```sh
mkdir ~/.remote-music-player-storage
```

Now edit the `.env` file:

```sh
cd ~/repo/remote-music-player/server
vim .env
```

**NOTE**: Use vim/nvim/nano/vi/code... your favorite editor!

```sh
# Define the API port
APP_PORT=

# Define the music storage folder, use $HOME to reference to your /home/user
BASE_URL=$HOME/.remote-music-player-storage # The created folder name
```

Now the port of the server, the default port is **8080**, but it's
customizable:

```sh
vim .env
```

```sh
# Define the API port
APP_PORT=8000

# Define the music storage folder, use $HOME to reference to your /home/user
BASE_URL=$HOME/.remote-music-player-storage
```

With this config, the address of the server is: `localhost:8000`

## Running the server

To run the server run this commands:

```sh
cd ~/repo/remote-music-player/server
npm start # or
yarn start # or with native style
node src/index.js
```

If your config is:

```sh
# Define the API port
APP_PORT=8000

# Define the music storage folder, use $HOME to reference to your /home/user
BASE_URL=$HOME/.remote-music-player-storage
```

The api address is: `localhost:8000` or `YOURIP:8000`

## What's the next?

Configure the [frontend](../client/README.md)
