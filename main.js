const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "LabradSoft",
        resizable: true,
        webPreferences: {
        },
        icon: __dirname + '/dist/assets/icolabradsoft.ico',
        show: false
    })

    win.setIcon(path.join(__dirname, '/assets/icolabradsoft.ico'));
    win.setOverlayIcon(__dirname + '/assets/icolabradsoft.png', 'LabradSoft')

    win.maximize();
    win.show();

    win.loadURL('https://yogoshops.com/labradsoft/index.html')

    win.setMenu(null);

    //appWin.webContents.openDevTools();

}

app.commandLine.appendSwitch('ignore-certificate-errors');

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});