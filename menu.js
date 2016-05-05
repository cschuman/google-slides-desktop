import { app, shell, Menu } from 'electron'

const APP_NAME = app.getName()

let darwinMenu = [
  {
    label: APP_NAME,
    submenu: [
      {
        label: `About ${APP_NAME}`,
        role: 'about'
      },
      {
        label: `Hide ${APP_NAME}`,
        accelerator: 'Cmd+H',
        role: 'hide'
      },
      {
        label: 'Hide others',
        accelerator: 'Cmd+Shift+H',
        role: 'hideothers'
      },
      {
        label: 'Show All',
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        label: `Quit ${APP_NAME}`,
        accelerator: 'Cmd+Q',
        click () {
          app.quit()
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo Typing',
        accelerator: 'Cmd+Z',
        role: 'undo'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+Cmd+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'Cmd+X',
        role: 'cut'
      },
      {
        label: 'Copy',
        accelerator: 'Cmd+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        accelerator: 'Cmd+V',
        role: 'paste'
      },
      {
        label: 'Select All',
        accelerator: 'Cmd+A',
        role: 'selectall'
      }
    ]
  },
  {
    label: 'Window',
    role: 'window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'Cmd+M',
        role: 'minimize'
      },
      {
        label: 'Close',
        accelerator: 'Cmd+W',
        role: 'close'
      }
    ]
  }
]

export default Menu.buildFromTemplate(darwinMenu)
