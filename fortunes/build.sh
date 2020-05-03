#!/bin/bash
rm -rf out
cp -r src out
rename 's/\.txt$//' out/*.txt
find out/* -exec strfile {} \;
# find src/*.txt -exec cp {} out/{} \;
# sudo cp out/*.dat /usr/share/games/fortunes 
sudo cp out/* /usr/share/games/fortunes 
