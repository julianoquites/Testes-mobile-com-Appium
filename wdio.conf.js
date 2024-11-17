import dotenv from "dotenv";
dotenv.config();

export const config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "https://ondemand.us-west-1.saucelabs.com/wd/hub",

  specs: ["./test/specs/**/*.js"],
  maxInstances: 1,
  maxInstancesPerCapability: 1, // Limita instâncias por capability

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone XR",
      "appium:automationName": "XCUITest",
      "appium:app": "storage:filename=LojaEBAC.ipa",
      "appium:noReset": false, // Garante estado limpo para cada teste
      "appium:newCommandTimeout": 240,
      "sauce:options": {
        build: `appium-build-EBAC-${new Date().toISOString()}`,
        name: "EBAC Módulo 29 - Testando aplicações iOS",
        deviceOrientation: "PORTRAIT",
        appiumVersion: "latest",
        sauceSeleniumUseHttp1: true, // Melhora estabilidade da conexão
      },
    },
  ],

  logLevel: "info",
  waitforTimeout: 20000, // Aumentado para maior estabilidade
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
    timeout: 120000, // Aumentado para testes mais longos
  },

  before: function (capabilities, specs) {
    browser.setTimeout({ implicit: 5000 });
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
