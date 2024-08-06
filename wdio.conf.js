export const config = {
  // runner: "local",
  // port: 4723,
  user: "oauth-juliano.quites-575c5",
  key: "2dd424fb-41a3-408e-8877-0ed5003a60ad",
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "wd/hub",

  specs: ["./test/specs/**/*.js"],
  maxInstances: 1,

  capabilities: [
    // {
    //   platformName: "Android",
    //   "appium:deviceName": "ebac-qe",
    //   "appium:platformVersion": "9.0",
    //   "appium:automationName": "UiAutomator2",
    //   "appium:app": `${process.cwd()}/app/ebacshop.apks`,
    //   "appium:appWaitActivity": ".MainActivity",
    //   "appium:disableIdLocatorAutocompletion": true,
    // },
    {
      platformName: "Android",
      "appium:app": "storage:filename=ebacshop.aab", // The filename of the mobile app
      "appium:deviceName": "Android GoogleAPI Emulator",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:disableIdLocatorAutocompletion": true,
      "sauce:options": {
        build: "appium-build-EBAC-MODULO-17",
        name: "EBAC Shop Test",
        deviceOrientation: "PORTRAIT",
        appiumVersion: "2.0.0",
      },
    },
  ],
  logLevel: "info",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    await browser.takeScreenshot();
  },
};
