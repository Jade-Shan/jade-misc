#!/bin/bash
mkdir -p webroot  ../../webroot/jadeutils.v2
echo '--- Starting build : jadeutils.v2 ---'
node ./node_modules/gulp-cli/bin/gulp.js
rm -rf ../../webroot/jadeutils.v2/*
cp -r webroot/* ../../webroot/jadeutils.v2
echo '--- finish build : jadeutils.v2 ---'

