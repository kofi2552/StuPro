const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 720,
    fullscreen: true,
    frame: false,
    icon: __dirname + `assets/icons/micslogo2.icns`,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true, // Enable Node integration
      contextIsolation: false, // Disable context isolation
    },
  });

  win.loadFile("index.html");

  // Handle close app request from renderer
  ipcMain.on("close-app", () => {
    win.close();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
