# Remote music player

A music player, running on your lan -> server.

## Setting up the server

First clone the repository:

```sh
mkdir ~/repo
cd ~/repo
git clone https://github.com/AlphaTechnolog/Remote-Music-Player
cd Remote-Music-Player/server
npm install
```

Now configure the `.env` file:

```sh
cd $HOME/repo/Remote-Music-Player/server
vim .env # edit/create the file with your favorite editor
```

```bash
APP_PORT=8000 # The port of server
BASE_URL=$HOME/.remote-music-player # The root of musics
```

Run the server:

```sh
cd $HOME/.remote-music-player
mkdir -p dir1/dir2
cp -r ~/Musics/01.mp3 ~/Musics/02.mp3 ./dir1/dir2s
```

## Endpoints

To get the content of a folder use the next endpoint:

- /content/{formatedPath}

The `formatedPath` is a directories path with the next
sequence of tokens: if the directory is: /dir1/dir2
the valid path is dir1!dir2 and the endpoint route is:
`/content/dir1!dir2`, example:

```sh
mkdir -p $HOME/.remote-music-player/dir1/dir2
touch $HOME/.remote-music-player/dir1/dir2/hello
curl "http://localhost:8000/content/dir1!dir2"
{
    "directories": [],
    "files": [
        "hello"
    ]
}
```
