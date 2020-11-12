# API auth-images

> API for images where where this have auth with JWT and passport. This api was created with Typescript

## 1. Started

for get the project you will use:

```tsx
git clone 'https://github.com/lucabecci/API-auth-images'
```

## 2. Pre-requeriments

You will need this requeriments for good rendiment:

- Node.JS > 10.X
- npm > 6.X

## 3. Installation

You will need run this comands for the installation:

```tsx
With npm: 
cd API-auth-images //we entered the directory.
npm install //we install the project dependencies.
npm run dev //we can run it with the dev script (it runs with nodemon).
//or
npm run build //we generate the prod code.
npm start //we can run it with the start script (it is executed with node).

With yarn:
cd API-auth-images //we entered the directory.
yarn install //we install the project dependencies.
yarn run dev //we can run it with the dev script (run with tsc-watch).
//or
yarn run build //generate the prod code.
yarn run start //execute the prod code with node.
```

## 4. Project structure

```tsx
|-- build
|-- node_modules
|-- src
    |-- config
        |-- config.ts
    |-- controllers
        |-- auth.controller.ts
				|-- images.controller.ts
				|-- index.controller.ts
    |-- database
        |-- database.ts
    |-- helpers
        |-- checks.ts
		|-- middlewares
        |-- multer.ts
				|-- passport.ts
    |-- models
        |-- Image.ts
				|-- User.ts
    |-- routes
        |-- auth.routes.ts
				|-- images.routes.ts
        |-- index.routes.ts
    |-- app.ts
    |-- index.ts
|-- uploads
|-- .env
|-- .gitignore
|-- .prettierignore
|-- .prettierrc
|-- commitlint.config.js
|-- eslintrc.js
|-- steps.md
|-- user_test.json
|-- nodemon.json
|-- package.json
|-- README.md
|-- tsconfig.json
|-- yarn.lock
```

## 5. Build with

DEPENDENCIES:

- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for node.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [mongoose](https://mongoosejs.com/) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [rimraf](https://www.npmjs.com/package/rimraf) - The first parameter will be interpreted as a globbing pattern for files.
- [passport](http://www.passportjs.org/) - Passport is authentication middleware for Node.js.
- [passport-jwt](https://www.npmjs.com/package/passport-jwt) - A Passport strategy for authenticating with a JSON Web Token.
- [multer](https://www.npmjs.com/package/multer) - Multer is a node.js middleware for handling multipart/form-data
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties.
- [uuid](https://www.npmjs.com/package/uuid) - For the creation of RFC4122 UUIDs
- [fs-extra](https://www.npmjs.com/package/fs-extra) - fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [bcrypt](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

DEV-DEPENDENCIES:

- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [husky](https://www.npmjs.com/package/husky) - Husky can prevent bad git commit, git push and more 🐶 woof!
- [commitlint](https://commitlint.js.org/#/) - commitlint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [ts-node](https://www.npmjs.com/package/ts-node) - TypeScript execution and REPL for node.js, with source map support.
- [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript/Typescript code.

## 6. Versioned

For the versioning, [ConventionalCommits] was used ([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))

## 7. Author

***Luca Becci -** code  and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)