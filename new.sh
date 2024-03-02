#!/usr/bin/env bash

# Get the current directory
currentDirectory=$(pwd)

# Iterate through each subdirectory and create a new file
for subdirectory in "$currentDirectory"/*/; do
    newFilePath="$subdirectory/urls.py"
    touch "$newFilePath"
done
