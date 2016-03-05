#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# only proceed script when started not by pull request (PR)
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# build (CHANGE THIS)
npm run build

# Exit if branch is not master
# if ["$TRAVIS_BRANCH" != "master" ]; then exit 0; fi

# config
git config --global user.email "cchandurkar@gmail.com"
git config --global user.name "cchandurkar"

#using token clone gh-pages branch
git clone --quiet --branch=gh-pages "https://${GITHUB_TOKEN}@${GITHUB_REF}.git"  gh-pages > /dev/null

#cd into gh-pages
echo "Listing: ";
ls

# Copy Files
cp -r ./docs ./gh-pages
cp -a ./dist/. ./gh-pages

# Init
cd gh-pages

# deploy
git add --all
git commit -m "Travis Build $TRAVIS_BUILD_NUMBER for gh-pages"
echo "Pushing https://${GITHUB_TOKEN}@${GITHUB_REF}.git";

git push --force --quite origin gh-pages > /dev/null 2>&1

# Remove tempGHPages directory
rm -rf gh-pages
