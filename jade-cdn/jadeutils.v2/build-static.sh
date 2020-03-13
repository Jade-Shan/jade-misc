#!/bin/bash

echo "Tips:"
echo "-c compile"
echo "-a all"

while getopts "b:ctrae" arg #选项后面的冒号表示该选项需要参数
do
	case $arg in
		c)
			gulp clean-style ;
			sleep 3 ;
			gulp build-less  ;
			sleep 3 ;
			gulp min-styles  ;
			sleep 3 ;
# 			gulp check-js    ;
# #			gulp build-less-base  ;
# #			gulp build-less-hobbit  ;
# 			sleep 5 ;
# #			gulp min-styles-base  ;
# #			gulp min-styles-hobbit  ;
# 			gulp min-scripts ;
			;;
		a)
			# qrsync ~/.config/qiniu/jadeutils.v2.json;
			;;
		?)  #当有不认识的选项的时候arg为?
			exit 1
			;;
	esac
done
