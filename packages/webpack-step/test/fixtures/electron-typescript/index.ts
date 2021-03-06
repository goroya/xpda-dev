// @ts-ignore
import { app, BrowserWindow } from 'electron'

function createWindow(): void {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadURL('http://google.com')
}

app.on('ready', createWindow)
