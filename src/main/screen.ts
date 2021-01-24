import { BrowserWindow } from "electron";
import fs from 'fs';
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';

export const runCommand = (arg: any, mainWindow: BrowserWindow) => {
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