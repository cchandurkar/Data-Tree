#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# build (CHANGE THIS)
npm run build

# Only Push to gh-pages if master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then exit 0; fi

# Remove and Recreate tempGHPages directory
rm -rf tempGHPages
mkdir tempGHPages

# Copy Files
cp -r ./docs ./tempGHPages
cp -a ./dist/. ./tempGHPages

# config
git config --global user.email "cchandurkar@gmail.com"
git config --global user.name "cchandurkar"

# Echo
echo "Deploying to gh-pages";

# deploy
cd tempGHPages
git init
git add --all
git commit -m "Updating Docs"
git push --force "https://${GITHUB_TOKEN}@$github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1

# Remove tempGHPages directory
rm -rf tempGHPages
