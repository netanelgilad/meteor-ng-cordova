Package.describe({
  name: 'netanelgilad:ng-cordova',
  version: '0.1.12-alpha',
  // Brief, one-line summary of the package.
  summary: 'AngularJS Cordova wrappers for common Cordova plugins.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/netanelgilad/meteor-ng-cordova',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.use('angularjs:angular@1.3.15', 'client');
  api.addFiles('ng-cordova.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ng-cordova');
  api.addFiles('ng-cordova-tests.js');
});
