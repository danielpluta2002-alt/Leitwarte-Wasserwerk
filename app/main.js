const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let win;
const FILTERS = [{ name: 'Leitwarte-Anlage', extensions: ['leitwarte'] }, { name: 'JSON', extensions: ['json'] }];
const send = cmd => win && win.webContents.send('menu', cmd);

function createWindow() {
  win = new BrowserWindow({
    width: 1400, height: 860, minWidth: 900, minHeight: 600,
    title: 'Leitwarte Wasser',
    icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#cdd2d5',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });

  const menu = Menu.buildFromTemplate([
    { label: 'Datei', submenu: [
      { label: 'Neue Anlage', accelerator: 'Ctrl+N', click: () => send('new') },
      { label: 'Beispielnetz laden', click: () => send('example') },
      { type: 'separator' },
      { label: 'Öffnen…', accelerator: 'Ctrl+O', click: () => send('open') },
      { label: 'Speichern', accelerator: 'Ctrl+S', click: () => send('save') },
      { label: 'Speichern unter…', accelerator: 'Ctrl+Shift+S', click: () => send('saveas') },
      { type: 'separator' },
      { label: 'Beenden', role: 'quit' }
    ]},
    { label: 'Bearbeiten', submenu: [
      { label: 'Verbinden ein/aus', accelerator: 'Ctrl+L', click: () => send('connect') },
      { type: 'separator' },
      { label: 'Ausschneiden', role: 'cut' }, { label: 'Kopieren', role: 'copy' }, { label: 'Einfügen', role: 'paste' }
    ]},
    { label: 'Simulation', submenu: [
      { label: 'Pause', accelerator: 'F5', click: () => send('speed0') },
      { label: '1 min/s', accelerator: 'F6', click: () => send('speed1') },
      { label: '10 min/s', accelerator: 'F7', click: () => send('speed10') },
      { label: '1 h/s', accelerator: 'F8', click: () => send('speed60') }
    ]},
    { label: 'Ansicht', submenu: [
      { label: 'Prozessbild einpassen', accelerator: 'Ctrl+0', click: () => send('fit') },
      { type: 'separator' },
      { label: 'Vollbild', role: 'togglefullscreen' },
      { label: 'Neu laden', role: 'reload' },
      { label: 'Entwicklertools', role: 'toggleDevTools' }
    ]}
  ]);
  Menu.setApplicationMenu(menu);
}

ipcMain.handle('open', async () => {
  const r = await dialog.showOpenDialog(win, { title: 'Anlage öffnen', filters: FILTERS, properties: ['openFile'] });
  if (r.canceled || !r.filePaths[0]) return null;
  return { path: r.filePaths[0], data: fs.readFileSync(r.filePaths[0], 'utf8') };
});
ipcMain.handle('save', async (_e, data, current) => {
  let p = current;
  if (!p) {
    const r = await dialog.showSaveDialog(win, { title: 'Anlage speichern', defaultPath: 'Anlage.leitwarte', filters: FILTERS });
    if (r.canceled || !r.filePath) return null;
    p = r.filePath;
  }
  fs.writeFileSync(p, data, 'utf8');
  return p;
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
