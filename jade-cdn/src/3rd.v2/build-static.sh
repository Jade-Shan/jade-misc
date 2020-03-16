#!/bin/bash

echo "Tips:"
echo "-h html inclue"
echo "-a all"

while getopts "b:aps" arg #选项后面的冒号表示该选项需要参数
do
	case $arg in
		p)
			;;
		s)
			;;
		a)
			qrsync ~/.config/qiniu/3rd.json;
			;;
		?)  #当有不认识的选项的时候arg为?
			exit 1
			;;
	esac
done
