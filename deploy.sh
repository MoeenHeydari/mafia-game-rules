#!/bin/bash

CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
echo "${CURRENT_BRANCH}"

if [[ $CURRENT_BRANCH != "develop" ]]; then
   echo "you are not in develop branch and you should be on develop branch to use this script. Aborting... "
   exit 1
fi

echo "discarding all changes..."
#git reset --hard HEAD

echo "checking out to master branch..."
git checkout master

echo "pulling from mater..."
git pull origin master

echo "pulling all changes from develop branch..."
git pull origin develop

echo "pushing master to github..."
git push origin

echo "making a build..."
npm run build

echo "deploing to firebase..."
firebase deploy