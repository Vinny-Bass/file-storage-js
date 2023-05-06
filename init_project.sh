#!/bin/bash

# Create backend project
echo "Creating backend project..."
mkdir backend
cd backend
npm init -y
npm install --save-dev typescript ts-node node types jest ts-jest eslint eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react prettier
npm install --save-dev nodemon @types/jest @typescript-eslint/eslint-plugin eslint-config-prettier

echo "Creating tsconfig.json..."
cat <<EOT >> tsconfig.json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
EOT

echo "Creating .eslintrc.json..."
cat <<EOT >> .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {}
}
EOT

echo "Creating .prettierrc..."
cat <<EOT >> .prettierrc
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
EOT

echo "Creating .jest.config.ts..."
cat <<EOT >> .jest.config.ts
export default {
  preset: 'ts-jest',
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  coverageThreshould: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  watchPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts'],
};
EOT

mkdir src
echo "console.log('Hello, backend!');" > src/index.ts

# Create frontend project
echo "Creating frontend project..."
cd ..
npx create-react-app frontend --template typescript
cd frontend
npm install --save-dev eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react prettier

echo "Updating tsconfig.json..."
cat <<EOT >> tsconfig.json
{
  "extends": "react-app"
}
EOT

echo "Creating .eslintrc.json..."
cat <<EOT >> .eslintrc.json
{
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {}
}
EOT

echo "Creating .prettierrc..."
cat <<EOT >> .prettierrc
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
EOT

echo "Projects initialized successfully!"
