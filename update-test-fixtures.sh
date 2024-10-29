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

# Update app-01
rm -r "tests/fixtures/app-01/output"
cp -r "tests/fixtures/app-01/input" "tests/fixtures/app-01/output"

./dist/bin/ember-codemod-translations-per-package.js \
  --root "tests/fixtures/app-01/output" \
  --type "app"

# Update v1-addon-01
rm -r "tests/fixtures/v1-addon-01/output"
cp -r "tests/fixtures/v1-addon-01/input" "tests/fixtures/v1-addon-01/output"

./dist/bin/ember-codemod-translations-per-package.js \
  --root "tests/fixtures/v1-addon-01/output" \
  --type "v1-addon"

# Update v1-addon-02
rm -r "tests/fixtures/v1-addon-02/output"
cp -r "tests/fixtures/v1-addon-02/input" "tests/fixtures/v1-addon-02/output"

./dist/bin/ember-codemod-translations-per-package.js \
  --root "tests/fixtures/v1-addon-02/output" \
  --type "v1-addon"

# Update v1-addon-03
rm -r "tests/fixtures/v1-addon-03/output"
cp -r "tests/fixtures/v1-addon-03/input" "tests/fixtures/v1-addon-03/output"

./dist/bin/ember-codemod-translations-per-package.js \
  --root "tests/fixtures/v1-addon-03/output" \
  --type "v1-addon"

# Update v2-addon-01
rm -r "tests/fixtures/v2-addon-01/output"
cp -r "tests/fixtures/v2-addon-01/input" "tests/fixtures/v2-addon-01/output"

./dist/bin/ember-codemod-translations-per-package.js \
  --root "tests/fixtures/v2-addon-01/output" \
  --type "v2-addon"
