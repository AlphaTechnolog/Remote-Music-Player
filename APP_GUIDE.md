# Remote music player (APP GUIDE)

The guide for the frontend app

## The first impresions

When you enter to the app, the content of the app, is similar of
a file explorer, have files and have a navbar, it navbar contain a
searcher.

## Create a directory

To create a directory, use the `Make a directory` button, press it;
the callback is a modal showing action, in it modal, write the
directory name, then press the `make` button, now the directory
is created!

## Uploading musics

To upload a files, navigate to the directory you want to upload the
musics, and now, press the `Upload musics` button, the callback
is a modal showing action, in it modal, press the Upload files button,
then select the musics, and then press the `Upload` green button
(in the bottom of the modal), now the musics are uploaded in the
actual directory

## Playing musics

To play a music, got a click on the music, and now, the player bar,
will'e appear on the bottom of the screen, press pause to pause,
it's the default navigator player API

## Searching musics and directories

To search musics and directories, press the searcher input on the
navbar, and then write the name of the directory, or the music, it
search on directories and musics.

The search input, support the regex search, e.g, if your music is
called `favorite - my favorite favorite music.mp3`, you want to type
in the search input this: `^fa.*.-..*fav.*\.m.*3$`, it's a example
and complicated regular expresion, but a more simple regex (regular
expresion), is: `^favorite - my.*music\.mp3$`, it works!

## Enjoy

Enjoy with the app and thanks for README :)
