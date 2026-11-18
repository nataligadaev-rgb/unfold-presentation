#!/bin/bash
# Build the deck for GitHub Pages and publish it to the gh-pages branch.
set -e
BASE=/unfold-presentation/
npx slidev build slides.md --base $BASE --out dist
# the deck's own images are referenced as "/assets/..." — point them at the Pages base path
python3 - <<PY
import re,glob
base="$BASE"
for f in glob.glob('dist/**/*',recursive=True):
    if f.endswith(('.js','.css','.html')):
        s=open(f,encoding='utf-8').read()
        n=re.sub(r'(["\'\`(])/assets/', lambda m: m.group(1)+base+'assets/', s)
        if n!=s: open(f,'w',encoding='utf-8').write(n)
PY
touch dist/.nojekyll
cp dist/index.html dist/404.html
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy Unfold presentation"
git remote add origin https://github.com/nataligadaev-rgb/unfold-presentation.git
git push -f origin gh-pages
