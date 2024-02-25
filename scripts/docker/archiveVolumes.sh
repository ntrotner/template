#!/bin/bash

source ./scripts/docker/volumeList.sh

sudo tar -czvf volumes.tar.gz ${volumeListPath[@]}