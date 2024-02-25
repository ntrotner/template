#!/bin/bash

docker compose down
./scripts/ui/create-release.sh $1
./scripts/backend/create-release.sh $1
