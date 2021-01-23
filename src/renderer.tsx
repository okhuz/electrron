import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron'

import App from '@/app/app';

export async function runCommand(cmd: any) {
  const res = await ipcRenderer.sendSync('runCommand', cmd);
  return res;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);