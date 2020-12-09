const { app, BrowserWindow, Menu } = require("electron");
const { ipcMain, webFrame} = require("electron");

app.on("ready", () => {
  const loadingScreen = "src/loading/loading.html";
  const mainScreen = "src/index/index.html";
  const apphtml = "app.html";

  loadMain(loadingScreen, mainScreen);
});

function loadMain(loadingScreen, mainScreen) {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 560,
    minHeight: 600,
    frame: true,
    show: false,
    center: true,
    backgroundColor: "#202226",
  });
  mainWin.loadFile(mainScreen);
  loadingWin = loadSplash(loadingScreen);
  mainWin.once("ready-to-show", () => {
    setTimeout(() => {
      loadingWin.hide();
      loadingWin.close();
      mainWin.show();
      loadTitleBar();
    }, 20000);
  });
}

function loadSplash(loadingScreen) {
  let loadingWin = new BrowserWindow({
    width: 800,
    height: 600,
    parent: mainWin,
    transparent: true,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  loadingWin.loadFile(loadingScreen);
  loadingWin.once("ready-to-show", () => {
    loadingWin.show();
  });
  return loadingWin;
}

function loadTitleBar() {
  let titleBar = new Menu();
  Menu.setApplicationMenu(titleBar);
}

app.on("window-all-closed", () => {
  app.quit();
});
