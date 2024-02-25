#!/bin/bash

source ./environment/prod/build.env

cd ./src/ui
npm install
npm run build

swa login
swa deploy ./build --env=$docker_env --subscription-id=$AZURE_SUBSCRIPTION_ID --deployment-token=$SWA_CLI_DEPLOYMENT_TOKEN

cd ../../../
