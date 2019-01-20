const { app } = require('electron')
const { BrowserWindow } = require("electron")
// require("electron").crashReporter.start({ companyName: "Area16" })

let mainWindow = null

function createWindow () {
  mainWindow = new BrowserWindow({
    width: process.env.WIDTH_DEFAULT || 800,
    height: process.env.HEIGHT_DEFAULT || 600
  })

  mainWindow.loadURL('file://' + __dirname + '/main.html')

  mainWindow.on('closed', () => {
    mainWindow = null;
  })

}


app.on('ready', createWindow)

app.on("window-all-closed", () => {
  app.quit()
})
