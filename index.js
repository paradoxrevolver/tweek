const electron = require('electron');

function createWindow() {
  win = new electron.BrowserWindow({ width: 800, height: 600 });
  win.loadFile('index.html');
}

electron.app.on('ready', createWindow);