const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('leitwarte', {
  open: () => ipcRenderer.invoke('open'),
  save: (data, path) => ipcRenderer.invoke('save', data, path),
  onMenu: cb => ipcRenderer.on('menu', (_e, cmd) => cb(cmd))
});
