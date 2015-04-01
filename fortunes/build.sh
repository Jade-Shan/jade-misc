#!/bin/bash
rm -rf out
mkdir out
find *.txt -exec cp {} out/{} \;
cd out
rename 's/\.txt$//' *.txt
find * -exec strfile {} \;
sudo cp ./* /usr/share/games/fortunes 
