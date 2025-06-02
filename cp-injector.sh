#!/bin/bash

# Check if rsync is available
if command -v rsync >/dev/null 2>&1; then
    rsync -av --exclude 'tsconfig.*' --exclude '.*' --exclude '*.ts' --exclude '*.sh' --exclude 'src' --exclude 'build' --exclude 'node_modules' --exclude 'docs' ./ build/chrome-extension/
# Check if powershell is available
elif command -v powershell >/dev/null 2>&1; then
    powershell -Command "Copy-Item ./* -Destination ./build/chrome-extension/ -Recurse -Force -Exclude tsconfig.*,.*,src,node_modules,build,docs,*.sh,*.ts"
else
    echo "You need to manually copy assets to build folder"
fi