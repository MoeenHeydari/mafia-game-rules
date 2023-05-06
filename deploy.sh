#!/bin/bash

# quick reference
# Num  Color     #define         R G B
# 0    black     COLOR_BLACK     0,0,0
# 1    red       COLOR_RED       1,0,0
# 2    green     COLOR_GREEN     0,1,0
# 3    yellow    COLOR_YELLOW    1,1,0
# 4    blue      COLOR_BLUE      0,0,1
# 5    magenta   COLOR_MAGENTA   1,0,1
# 6    cyan      COLOR_CYAN      0,1,1
# 7    white     COLOR_WHITE     1,1,1

CURRENT_BRANCH=$(git symbolic-ref --short HEAD)

if [[ $CURRENT_BRANCH != "develop" ]]; then
   echo "$(tput setab 0)$(tput setaf 1) you are not in develop branch and you should be on develop branch to use this script. Aborting... $(tput sgr 0)"
   exit 1
fi

echo "$(tput setab 0)$(tput setaf 3) discarding all changes... $(tput sgr 0)"
git reset --hard HEAD

echo "$(tput setab 0)$(tput setaf 3) checking out to master branch... $(tput sgr 0)"
git checkout master

echo "$(tput setab 0)$(tput setaf 3) pulling from mater...$(tput sgr 0)"
git pull origin master

echo "$(tput setab 0)$(tput setaf 3) pulling all changes from develop branch... $(tput sgr 0)"
git pull origin develop

echo "$(tput setab 0)$(tput setaf 3) pushing master to github... $(tput sgr 0)"
git push origin

echo "$(tput setab 0)$(tput setaf 3) making a build... $(tput sgr 0)"
npm run build

echo "$(tput setab 0)$(tput setaf 3) deploing to firebase... $(tput sgr 0)"
firebase deploy

echo "$(tput setab 0)$(tput setaf 3) checking out to develop branch... $(tput sgr 0)"
git checkout develop