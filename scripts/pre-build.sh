#!/bin/bash

echo "pre-build.sh – removing old build if exists"


[ "$(ls -A $PWD/build)" ] && rm -r $PWD/build/* || echo "No Previous Builds"
