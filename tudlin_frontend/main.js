import { app, BrowserWindow, nativeImage, ipcMain, Menu } from "electron";
import path from "path";

import { fileURLToPath } from "url";

// Get the directory name from the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log("Preload path:", path.join(__dirname, "preload-script.js"));
// console.log("app icon path:", path.join(__dirname, "public/tudlin-logo.icns"));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    // width: 1024,
    // height: 768,
    frame: false, // Disable the default title bar
    icon: path.join(__dirname, "public/tudlin-logo.icns"),
    webPreferences: {
      preload: path.join(__dirname, "preload-script.js"),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  // Load the HTML file
  mainWindow.loadURL("http://localhost:5173/");
}

// Remove the default menu
if (process.env.NODE_ENV !== "development") {
  Menu.setApplicationMenu(null);
}

ipcMain.on("window-minimize", () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on("window-maximize", () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on("window-close", () => {
  if (mainWindow) mainWindow.close();
});

// Initialize Electron app when ready
app.whenReady().then(() => {
  createWindow();
});

// app.on("ready", createWindow);

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

console.log("Window loaded...!");
