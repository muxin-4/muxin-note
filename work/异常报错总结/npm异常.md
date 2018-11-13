[ENOENT errors, `.staging`? #13528](https://github.com/npm/npm/issues/13528)

```
npm cache clean --force
rm -rf ~/.npm
# In the project folder:
rm -rf node_modules
rm -f package-lock.json
```

