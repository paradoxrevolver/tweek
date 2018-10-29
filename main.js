const { app, BrowserWindow } = require('electron');

// turning this on shows a bunch of debugging things
const DEBUG = true;
// width and height to start the application at
const STARTING_WIDTH = 800;
const STARTING_HEIGHT = 600;

// make win a global variable
let win;

function createWindow() {
  // set up a new browser window
  win = new BrowserWindow({ width: STARTING_WIDTH, height: STARTING_HEIGHT });
  // load a page into the starting window
  win.loadFile('index.html');
  // open developer tools immediately if debugging
  if(DEBUG) win.webContents.openDevTools();
   
  win.on('closed', () => {
    // dereference the window object when closed
    win = null;
  });
}

// create the window when ready
app.on('ready', createWindow);

// more explicitly kill the program for OSX users
// ensures that if no windows are open, the app will terminate
app.on('window-all-closed', () => {
  if( process.platform !== 'darwin' )
    app.quit();
});

// more explicitly open the program for OSX users
// recreate a window when the dock icon is clicked and no windows are open
app.on('activate', () => {
  if( win === null )
    createWindow();
});