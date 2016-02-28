#!/bin/bash
DIR=`dirname ${BASH_SOURCE[0]}`
node $DIR/../index.js 100 vlc -R $DIR/alert.wav
