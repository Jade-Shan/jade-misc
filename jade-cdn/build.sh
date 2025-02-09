#!/bin/bash

cd src/3rd/
bash ./build.sh
cd ../..
echo $PWD

cd src/jadeutils.v2/
bash ./build.sh
echo $PWD
cd ../..
