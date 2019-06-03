#!/bin/bash

for i in ./*;
do
newname=`echo $i|sed 's/\.bem//'` #.要转义
if [ $i != $newname ];then
mv $i $newname
echo $newname
fi
done