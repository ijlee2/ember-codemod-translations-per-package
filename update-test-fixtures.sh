#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./update-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

# Update fixtures
rm -r "tests/fixtures/my-project/output"
cp -r "tests/fixtures/my-project/input" "tests/fixtures/my-project/output"

./dist/bin/ember-codemod-translations-per-package.js \
  --root "tests/fixtures/my-project/output"
