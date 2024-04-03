set -x

for file in ./rules/*; do
  sg scan -r $file --update-all
done

sg scan -r ./rules/json.yaml --update-all packages/remix-dev/__tests__/fixtures/deno/.vscode/resolve_npm_imports.json

pnpm format
