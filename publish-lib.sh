#!/bin/bash

ng build ngx-okta-auth

echo "Building Schematics"

cd projects/ngx-okta-auth

tsc -p tsconfig.schematics.json

echo "Copying collections to dist"

cp collection.json ../../dist/ngx-okta-auth

cd ../../dist/ngx-okta-auth

npm publish