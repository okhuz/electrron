import { app, BrowserWindow, ipcMain } from 'electron';
import fs from 'fs';
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';

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
  event.returnValue = await runCommand(arg);
});

const runCommand = (arg: any) => {
  console.log(arg);
  mainWindow.webContents.capturePage().then(image => {
    let imageName = `test${uuidv4()}.png`;
    fs.writeFile(imageName, image.toPNG(), (err) => {
      if (err) throw err
    });
    axios.get("http://jsonplaceholder.typicode.com/todos/1").then(r => {
      console.log(r.data);
    })
    .catch(e => {
      console.log(e);
    })
  });
}

app.on('ready', createWindow);