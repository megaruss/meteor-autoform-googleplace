Package.describe({
  name: 'megaruss:autoform-googleplace',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Google Places Autocomplete input (without map). Returns an object with formatted address components, based on lukemadera:autoform-googleplace',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/megaruss/meteor-autoform-googleplace',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.use('session@1.0.0');
  api.addFiles([
    'lukemadera_autoform-googleplace.html',
    'lukemadera_autoform-googleplace.css',
    'lukemadera_autoform-googleplace.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lukemadera:autoform-googleplace');
  api.addFiles('lukemadera_autoform-googleplace-tests.js');
});
