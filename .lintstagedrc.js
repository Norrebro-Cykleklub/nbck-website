module.exports = {
  // This will run a ES Lint and prettier fix on committed files
  // Copied from https://github.com/okonet/lint-staged
  // > Example: Run tsc on changes to TypeScript files, but do not pass any filename arguments
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{html,js,json,jsx,ts,tsx,css,md,yaml}': 'prettier --write',
  '*.{css,js,jsx,ts,tsx}': 'stylelint --fix',
  // Optimize .svg files
  '*.svg': 'svgo',
};
