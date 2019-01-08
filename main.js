const { Menu, app, BrowserWindow } = require('electron')

app.on('ready', () =>{
    LoadWindow()
})

function LoadWindow () {
    let win = new BrowserWindow({width: 800, height: 600, icon: 'twittdesktwitterlogo.png'})
    win.on('closed', () =>{
    win = null
})

win.loadURL('https://www.twitter.com')

Menu.setApplicationMenu(null)
}