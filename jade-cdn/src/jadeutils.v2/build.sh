#!/bin/bash
echo '--- Starting build : jadeutils.v2 ---'
gulp
rm -rf ../../webroot/jadeutils.v2
cp -r webroot ../../webroot/jadeutils.v2
echo '--- finish build : jadeutils.v2 ---'

