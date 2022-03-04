// 서버 가용률 테스트

const webdriver = require("selenium-webdriver");
const { By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const url = "https://192.168.0.34:8443/mrlogintest";

const run = async () => {
  let start = new Date().getTime();
  // SSL 인증서 오류를 무시하고 진행 하도록 설정
  const chromeOptions = new chrome.Options();
  chromeOptions.addArguments("excludeSwitches", ["enable-logging"]);
  chromeOptions.addArguments("ignore-certificate-errors");

  // 1. chromedriver 경로 설정
  // chromedriver가 있는 경로를 입력
  const service = new chrome.ServiceBuilder("./chromedriver").build();
  chrome.setDefaultService(service);

  // 2. chrome 브라우저 빌드
  let driver = await new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  // 3. google 사이트 열기
  // await driver.get(url);

  // let info_div = await driver.findElement(
  //   By.className(
  //     "MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root login css-b42f48-MuiButtonBase-root-MuiButton-root"
  //   )
  // );
  // // 로그인 클릭

  // await info_div.click();

  await driver.get(
    "https://192.168.0.34:8443/login/?back_uri=%2F&client_id=1345e35f-37ed-4cfb-8ca0-f381deb9dc68&redirect_uri=https%3A%2F%2F192.168.0.34%3A8443%2Fmanage%2Fsignin"
  );

  let info_div2 = await driver.findElement(
    By.className(
      "MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways login_req css-1ktgag0-MuiTypography-root-MuiLink-root"
    )
  );

  await info_div2.click();

  let info_div3 = await driver.findElement(
    By.className(
      "MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
    )
  );

  await info_div3.sendKeys("test@mrlogin.io", Key.ENTER);

  await driver.get(
    "https://192.168.0.34:8443/login/password/?back_uri=%2Flogin%2Fidentify%3Fclient_id%3D1345e35f-37ed-4cfb-8ca0-f381deb9dc68%26redirect_uri%3Dhttps%253A%252F%252F192.168.0.34%253A8443%252Fmanage%252Fsignin%26back_uri%3D%252Flogin%253Fback_uri%253D%25252F%2526client_id%253D1345e35f-37ed-4cfb-8ca0-f381deb9dc68%2526redirect_uri%253Dhttps%25253A%25252F%25252F192.168.0.34%25253A8443%25252Fmanage%25252Fsignin&client_id=1345e35f-37ed-4cfb-8ca0-f381deb9dc68&redirect_uri=https%3A%2F%2F192.168.0.34%3A8443%2Fmanage%2Fsignin&identity=test%40mrlogin.io"
  );
  let info_div4 = await driver.findElement(
    By.className(
      "MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
    )
  );

  await info_div4.sendKeys("0328", Key.ENTER);

  // try {
  //   await driver.wait(() => {
  //     return false;
  //   }, 4000);
  // } catch (err) {}

  let end = new Date().getTime();
  console.log(parseFloat((end - start) / 1000) + "초 소요");

  // 4. 10초 후에 브라우저 종료
  setTimeout(async () => {
    await driver.quit();
    process.exit(0);
  }, 5000);
};
run();

module.exports = run;
