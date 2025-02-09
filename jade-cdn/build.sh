#!/bin/bash

cd cdn-libs/3rd/
bash ./build.sh
cd ../..
echo $PWD

cd cdn-libs/jadeutils.v2/
bash ./build.sh
echo $PWD
cd ../..
