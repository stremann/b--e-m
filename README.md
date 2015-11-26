# Methodologies and Frameworks: BEM [![Build Status](https://travis-ci.org/stremann/b--e-m.svg?branch=master)](https://travis-ci.org/stremann/b--e-m)

> Methodologies and Frameworks (BEM) [Home Assignment] (https://kb.epam.com/pages/viewpage.action?pageId=312433537)
> HTML/CSS Best practices [Home Assignment] (https://kb.epam.com/pages/viewpage.action?pageId=312433539)

![EPAM Systems](http://stremann.github.io/assets/images/logo.svg)

### System requirements:
- Node.js -v 4.2.2
- NPM -v 2.14.7

### Running application:
```sh
$ git clone [git-repo-url] js_mentoring_kyiv_2015
$ cd js_mentoring_kyiv_2015/Module8/Hw21/b--e-m
$ npm start
$ node server.js
```
> Check how application runs on [localhost](http://localhost:3000/) environment and on [heroku] (https://b--e-m.herokuapp.com/) platform as well

### Application advantages:
- Production-ready code
- Easy way scalability
- Modular file structure
- Modular code structure
- Adherence to the AIB concept

### Implemented features:
- Grunt for running tasks
- SASS for CSS preprocessing
- Autoprefixer for CSS postprocessing
- Express for server-side development
- EJS for server-side templating
- Travis-CI for continuous integration
- Heroku for deployment

### Check list:
- BEM methodology
- Correct tag name
- Accessibility attr
- CSS code styles 
- CSS preprocessor
- CSS postprocessor

### Configuration:
- Create repository on GitHub and add remote: 
```sh
$ git remote add origin git@github.com:stremann/b--e-m.git
```
- Create repository on heroku: 
```sh
$ heroku create b--e-m
```
- Synchronize GitHub repository with [Travis-CI](https://travis-ci.org/profile/stremann)
- Allow to track `b--e-m` repository from GitHub on Travis-CI
- Create encrypted token for heroku: 
```sh
$ travis encrypt $(heroku auth:token) --add deploy.api_key
```
- Push changes into GitHub repository
- Open [Travis-CI](https://travis-ci.org/) to see how build goes
- After success build run:
```sh
$ heroku open
```
- Enjoy and have fun with your [application](https://b--e-m.herokuapp.com/)