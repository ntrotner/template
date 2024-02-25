#!/bin/bash

volumeList=("data-dump_db")
volumeListPath=()

for i in "${volumeList[@]}"
do
  volumeListPath+=("/var/lib/docker/volumes/$i")
done
