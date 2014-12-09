# grunt-scout

> Generate a simple scout file based on [Alex Sexton's scout strategy](https://alexsexton.com/blog/2013/03/deploying-javascript-applications/).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-scout --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-scout');
```

## The "scout" task

### Overview
In your project's Gruntfile, add a section named `scout` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  scout: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### baseUrl
Type: `String`
Default value: `',  '`

Base URL for assets.

#### buildNumber
Type: `String`

Application build number for the scout file to point to.

#### jsPath
Type: `String`

Path to the main js file, relative to `baseUrl` + `buildNumber`.

#### cssPath
Type: `String`

Path to the main css file, relative to `baseUrl` + `buildNumber`.

### Usage Examples

#### Generate scout with js only

```js
grunt.initConfig({
  pkg: require('./package.json'),

  scout: {
    dist: {
      options: {
        baseUrl: '//s3.amazon.com/mysite/mybucket',
        buildNumber: '<%= pkg.name %>',
        jsPath: '/js/<%= pkg.name %>.js'
      },
      dest: 'dist/scout.js'
    }
  }
});
```

#### Generate scout with js and css assets

```js
grunt.initConfig({
  pkg: require('./package.json'),

  scout: {
    dist: {
      options: {
        baseUrl: '//s3.amazon.com/mysite/mybucket',
        buildNumber: '<%= pkg.name %>',
        jsPath: '/js/<%= pkg.name %>.js',
        cssPath: '/css/%<= pkg.name %>.css'
      },
      dest: 'dist/scout.js'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
