#!/bin/bash

#@echo off
#set "SystemPath=%SystemRoot%\System32"
#if not "%ProgramFiles(x86)%" == "" if exist %SystemRoot%\Sysnative\* set "SystemPath=%SystemRoot%\Sysnative"

echo "post-build.sh – moving assets of frontend build to dev/ folder."


mkdir $PWD/build/dev
find $PWD/build/ -type f -print0 | xargs -0 mv -f -t $PWD/build/dev
mv -f $PWD/build/dev/index.html $PWD/build
