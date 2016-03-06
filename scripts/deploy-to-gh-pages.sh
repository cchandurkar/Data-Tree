#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# build (CHANGE THIS)
npm run build

# Exit if branch is not master
if [[ "$TRAVIS_BRANCH" == "master" ]]
then

  # config
  git config --global user.email "cchandurkar@gmail.com"
  git config --global user.name "cchandurkar"

  #using token clone gh-pages branch
  git clone --quiet --branch=gh-pages "https://${GITHUB_TOKEN}@${GITHUB_REF}.git"  gh-pages > /dev/null

  # Copy Files
  cp -r ./docs ./gh-pages
  cp -a ./dist/. ./gh-pages

  # cd into gh-pages
  cd gh-pages

  # deploy
  git add --all
  git commit -m "Travis Build $TRAVIS_BUILD_NUMBER for gh-pages"
  git push -fq origin gh-pages > /dev/null 2>&1

  # Remove tempGHPages directory
  rm -rf gh-pages

else
  echo "gh-pages will be updated upon push or pull to master";
fi
