module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    preprocessors: {
      '*.js': 'coverage'
    },
    files: ['./CustomMatcher.js', '*.js', '*.spec.js'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage','karma-jasmine-html-reporter'],
    reporters: ['dots', 'coverage'],
    colors: true,
    singleRun: false,
    restartOnFileChange : true,
    browsers: ['Chrome'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
