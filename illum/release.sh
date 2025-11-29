echo "{
  \"branch\":\"$(git rev-parse --abbrev-ref HEAD)\",
  \"sha\":\"$(git rev-parse --verify HEAD)\",
  \"version\":\"$(node -p "require('./package.json').version")\",
  \"enviornment\":\"$(npm run show-env | tail -n 1)\"
}
" > release.json

