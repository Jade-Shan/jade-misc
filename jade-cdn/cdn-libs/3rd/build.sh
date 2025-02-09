#!/bin/bash
echo '--- Starting build : 3rd ---'
mkdir -p ../../webroot/3rd/ 
rm   -rf ../../webroot/3rd/*
cp -r webroot/* ../../webroot/3rd
cd ../../webroot/
tar czf 3rd.tar.gz 3rd/
echo '--- finish build : 3rd ---'


