#!/usr/bin/env bash

npm install
npm rebuild node-sass
ng serve --host 0.0.0.0 --port 4200 --live-reload-port 49152
