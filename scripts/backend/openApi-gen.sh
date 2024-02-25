#!/bin/bash

docker run --rm --user 1000:1000 \
    -v ${PWD}/src/backend/open-api:/local \
    -v ${PWD}/shared:/shared \
    -v /usr/local/go/bin/gofmt:/usr/local/bin/gofmt \
    -e GO_POST_PROCESS_FILE="/usr/local/bin/gofmt -w" \
    openapitools/openapi-generator-cli generate \
    -i /shared/openApi.yaml \
    -g go-server \
    -o /local/ \
    --additional-properties="outputAsLibrary=true,enablePostProcessFile=true" \

cat ./shared/openApi.yaml | yq -o=json -I2 > ./src/backend/open-api/swaggerui/swagger.json