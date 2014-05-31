module.exports = function(karma) {
    karma.set({
        basePath: 'tests',
        port: 8000,

        files: [
          "dist/deps.min.js",
          "helper.js",
          "adapter_tests.js",
          "adapter_embedded_tests.js"
        ],

        logLevel: karma.LOG_ERROR,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false,

        frameworks: ['qunit', 'qunit-sb']
    });
};
