# Remote music player (Deployment procediment)

First configure the app, see this [doc](./README.md)

- [Server](./server/README.md)
- [Client](./client/README.md)

## How to get your ip?

The ip for this app is very important, to get it, use this:

```sh
ifconfig # or
sudo ifconfig # or in windows
ipconfig # on the cmd.exe app
```

## Running the server

Run the server on port 8000.

**NOTE**: Configure the `.env` file to run in the port **8000**

```sh
cd ~/repo/remote-music-player/server
npm start
```

## Running the client

Run the client in the port 5000, using the ip as api host and port **8000**:

**NOTE**: Configure the `src/config.json` file, to point to api with
api host (ip) and port **8000**

Build it:

```sh
cd ~/repo/remote-music-player/client
npm run build # or
yarn build
```

Now install `serve`:

```sh
npm install -g serve # or
yarn add -g serve
```

Now run it:

```sh
cd ~/repo/remote-music-player/client
serve -s build -l 5000 # -l 5000, to specify the port 5000 for the client
```

## Using the app

To use the app, open a web browser and type `http://{ip}:5000`, where
ip = your ip (get your ip with the ifconfig or ipconfig command
explained in the top)

## App guide

See the app [guide](./APP_GUIDE.md) to get help about the application
