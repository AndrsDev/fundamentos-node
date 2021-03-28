const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  })

  mainWindow.loadFile('src/index.html')
}

app.on('ready', createWindow)