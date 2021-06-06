# Remote music player (client)

The client for the API of the app.

## Getting started

First read this [doc](../README.md)

## Installing dependencies

First install the client dependencies:

```sh
cd ~/repo/remote-music-player/client
npm install # or
yarn
```

## Configuring the config.json file

The `config.json` file is the equivalent of the `.env` file
on the app API. It's a json file, go to the src folder and edit it:

```sh
cd ~/repo/remote-music-player/client/src
vim config.json
```

The content of the default config.json:

```json
{
  "API_PATH": "http://localhost:8080"
}
```

But, is more recomendable use the ip of your pc or the server ip,
to this change the `localhost` hostname to your ip, if my ip is
e.g: **192.168.43.1**, the configuration is:

```json
{
  "API_PATH": "http://192.168.43.1:8080"
}
```

And if the server port is **8000** the configuration is this:

```json
{
  "API_PATH": "http://192.168.43.1:8000"
}
```

## Compiling the project

To build the project for production, use this command:

```sh
cd ~/repo/remote-music-player/client
npm run build # this compile for production
```

## Running the builded frontend

To run the builded project use this command:

```sh
cd ~/repo/remote-music-player/client
npm install -g serve # or
yarn add -g serve
serve -s build -l 5000
```

Now your client is running on port 5000, open your web browser and
type this in the bar:

`http://192.168.43.1:5000/` or if you're runninng the app in local
mode: `http://localhost:5000`.

## Running the frontend for development

To run the frontend for development:

```sh
cd ~/repo/remote-music-player/client
npm start # or
yarn start
```

## What's next?

Now the client and server are configured; if not, configure
the [server](../server/README.md).

The complete app must be deployed, to deploy it on your local
server, see this [doc](../DEPLOYMENT.md)
