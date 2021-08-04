## Setup development environment

This project's using some technical such as:

- NodeJS
- Express
- Sequelize
- MySQL
- RestFul API

For more information, please check detail docs:

- [Express](https://gitlab.com/rikai_nhat.nguyen/planningen-tv-meeting-serverapp/docs/Express.md)
- [Sequelize](https://gitlab.com/rikai_nhat.nguyen/planningen-tv-meeting-serverapp/docs/Sequelize.md)

## 1. Clone source

- Using SSH Clone source from [reponsitory](git@github.com:hoangghaii/redux-101.git)
- Note: to clone source code, please refer [Git guildeline](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)

## 2. Setup Database

**Step 1**

- Visit [MySQL homepage](https://www.mysql.com/downloads/)
- Follow the guideline, download and install MySQL Services to your PC from
- Using [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) or [TablePlus](https://tableplus.com/) to manage database

**Step 2**

- Open `.env` file on the root folder of source and will see

```js
DATABASE_HOST=127.0.0.1
DATABASE_USER=root
DATABASE_PWD=ADMIN@12345
DATABASE_NAME=todo_db
```

- Open MySQL Workbench or TablePlus
- Setup database with `DATABASE_USER`, `DATABASE_PWD`, and `DATABASE_NAME`.

## 2. Run project

- Open new terminal on PC and run command to install `Sequelize-CLI` on global environment. This step will help you to enter Sequelize's command on the root folder

```bash
$ npm install sequelize-cli -g
```

- Open terminal on root folder of project and run command to install package

```bash
$ npm install
```

- Skip for 1 time. Rr run reset data to delete all if existed.

```bash
$ npm run resetdb
```

- Run migration file to create table on setted-up database

```bash
$ npm run migrate
```

- Run seed file to add demo data to database (run only 1 time after clear all data)

```bash
$ npm run initdata
```

- Run command to start server

```bash
$ npm start
```

- Open browser and enter [localhost:900](http://localhost:9000/) to check running server

## Docs & Community

- [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
- [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
- [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
- Visit the [Wiki](https://github.com/expressjs/express/wiki)
- [Google Group](https://groups.google.com/group/express-js) for discussion
- [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

### Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm test
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
