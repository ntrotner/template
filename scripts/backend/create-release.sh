#!/bin/bash

source ./environment/prod/build.env

docker build -f ./dockerfiles/backend.Dockerfile -t ${container_registry}/${app_name}-backend:$1 .
docker image push ${container_registry}/${app_name}-backend:$1
