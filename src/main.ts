import { app, BrowserWindow, ipcMain } from 'electron';
import { runCommand } from './main/screen';

let mainWindow: BrowserWindow;
const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.webContents.openDevTools();

  mainWindow.loadFile('index.html');
}

ipcMain.on('runCommand', async (event, arg) => {
  event.returnValue = await runCommand(arg, mainWindow);
});

app.on('ready', createWindow);