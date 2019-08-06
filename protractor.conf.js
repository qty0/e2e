exports.config = {
  allScriptsTimeout: 40000,
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

    directConnect: true,

  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/**/*_steps.js',
    format: 'pretty'
  }
}
