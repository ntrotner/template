#!/bin/bash

docker run --rm --user 1000:1000 \
    -v ${PWD}/src/ui/src/lib/open-api:/local \
    -v ${PWD}/shared:/shared \
    openapitools/openapi-generator-cli generate \
    -i /shared/openApi.yaml \
    -g typescript-fetch \
    -o /local/