#!/bin/bash

# Check if the user has provided a parameter
if [ -z "$1" ]; then
  echo "Usage: $0 <new-project-name>"
  exit 1
fi

PROJECT_NAME=$1

# Run the commands with the provided parameter
npx @slicemachine/init -r "$PROJECT_NAME"
tsx ./utils/initContent.ts "$PROJECT_NAME"