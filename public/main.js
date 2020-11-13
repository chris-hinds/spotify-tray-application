const {
  app,
  BrowserWindow,
  Tray,
  ipcMain,
  ipcRenderer,
  protocol,
} = require("electron");
const path = require("path");
const os = require("os");
const isDev = require("electron-is-dev");
const queryString = require("query-string");

let tray = undefined;
let window = undefined;
let authWindow = undefined;
// Don't show the app in the doc
app.dock.hide();
app.on("widevine-ready", () => {
  createTray();
  createWindow();
  openDevTools();
  protocol.registerFileProtocol(
    "spotifyauth",
    (request) => {
      const authObject = constructAuthObj(request);
      window.send("auth-received", authObject);
      authWindow.destroy();
    },
    (error) => {
      if (error) console.error(`Failed to register custom protocol: ${error}`);
    }
  );
});

const constructAuthObj = (request) => {
  const parsedUrl = queryString.parse(request.url);

  return {
    refreshToken: parsedUrl.refresh_token,
    accessToken: parsedUrl["spotifyauth://callback?access_token"],
  };
};

const createTray = () => {
  tray = new Tray(path.join(__dirname, "trayIcon.png"));
  tray.on("click", function (event) {
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
    BrowserWindow.addDevToolsExtension(
      path.join(
        os.homedir(),
        "/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0"
      )
    );
  }
};

const createWindow = () => {
  window = new BrowserWindow({
    width: 360,
    height: 600,
    useContentSize: true,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
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
  authWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  const authServer = "https://salty-fjord-94211.herokuapp.com/login";
  authWindow.loadURL(authServer);
  authWindow.show();

  function handleCallback(url) {
    if (
      url.startsWith("http://localhost:8888/callback?") ||
      url.startsWith("https://salty-fjord-94211.herokuapp.com")
    ) {
      authWindow.loadURL(url);
    } else {
      console.error(console.log("unexpected callback url."));
    }
  }

  authWindow.webContents.on("will-navigate", function (event, url) {
    handleCallback(url);
  });

  authWindow.webContents.on("will-redirect", function (event, oldUrl, newUrl) {
    handleCallback(oldUrl);
  });

  // Reset the authWindow on close
  authWindow.on(
    "close",
    function () {
      authWindow = null;
    },
    false
  );
});
