import { app, BrowserWindow } from 'electron';

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.webContents.openDevTools();

  win.loadFile('index.html');
}

app.on('ready', createWindow);