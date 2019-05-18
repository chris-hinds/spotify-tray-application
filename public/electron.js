const { app, BrowserWindow, Tray, ipcMain } = require("electron");
const path = require("path");
const os = require("os");
const isDev = require("electron-is-dev");
let tray = undefined;
let window = undefined;
// Don't show the app in the doc
app.dock.hide();
app.on("ready", () => {
  createTray();
  createWindow();
  openDevTools();
});

const createTray = () => {
  tray = new Tray(path.join(__dirname, "trayIcon.png"));
  tray.on("click", function(event) {
    toggleWindow();
  });
};

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow();
};

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
};

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();

  // Center window horizontally below the tray icon
  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  );
  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4);
  return { x: x, y: y };
};

const indexUrl = () => {
  return isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;
};

const openDevTools = () => {
  // if (isDev) {
  window.openDevTools({ mode: "detach" });
  BrowserWindow.addDevToolsExtension(
    path.join(
      os.homedir(),
      "/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0"
    )
  );
  // }
};

const createWindow = () => {
  window = new BrowserWindow({
    width: 400,
    height: 600,
    useContentSize: true,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    alwaysOnTop: true
  });
  window.loadURL(indexUrl());
  // Hide the window when it loses focus
  window.on("blur", () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });
};

ipcMain.on("open-auth-window", () => {
  // Build the OAuth consent page URL
  var authWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    "node-integration": false
  });
  var githubUrl = "http://localhost/3000/login";
  authWindow.loadURL(githubUrl);
  authWindow.show();

  function handleCallback(url) {
    console.log(url);
    // var raw_code = /code=([^&]*)/.exec(url) || null;
    // var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
    // var error = /\?error=(.+)$/.exec(url);

    // if (code || error) {
    //   // Close the browser if code found or error
    //   authWindow.destroy();
    // }

    // // If there is a code, proceed to get token from github
    // if (code) {
    //   self.requestGithubToken(options, code);
    // } else if (error) {
    //   alert('Oops! Something went wrong and we couldn\'t' +
    //     'log you in using Github. Please try again.');
    // }
  }

  // Handle the response from GitHub - See Update from 4/12/2015

  authWindow.webContents.on("will-navigate", function(event, url) {
    handleCallback(url);
  });

  authWindow.webContents.on("did-get-redirect-request", function(
    event,
    oldUrl,
    newUrl
  ) {
    handleCallback(newUrl);
  });

  // Reset the authWindow on close
  authWindow.on(
    "close",
    function() {
      authWindow = null;
    },
    false
  );
});
