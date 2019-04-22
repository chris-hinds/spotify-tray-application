const { app, BrowserWindow, ipcMain, Tray } = require("electron");
const path = require("path");
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
  if (isDev) {
    window.openDevTools({ mode: "detach" });
  }
};

const createWindow = () => {
  window = new BrowserWindow({
    width: 600,
    height: 200,
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
