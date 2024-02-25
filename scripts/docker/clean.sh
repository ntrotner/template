#!/bin/bash

source ./scripts/docker/volumeList.sh

docker compose down
docker container rm nginx
docker network rm host_network
docker volume rm ${volumeList[@]}
