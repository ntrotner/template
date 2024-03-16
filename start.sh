#!/bin/bash

export docker_env=dev # dev/prod

./scripts/docker/network.sh
./scripts/docker/container.sh

docker compose down