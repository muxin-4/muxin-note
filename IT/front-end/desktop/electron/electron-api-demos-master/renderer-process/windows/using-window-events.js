const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const manageWindowBtn = document.getElementById('listen-to-window')
const focusModalBtn = document.getElementById('focus-on-modal-window')
let win

manageWindowBtn.addEventListener('click', function () {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal-toggle-visibility.html')
  win = new BrowserWindow({ width: 600, height: 400 })
  win.on('focus', hideFocusBtn)
  win.on('blur', showFocusBtn)
  win.on('close', function () {
    hideFocusBtn()
    win = null
  })
  win.loadURL(modalPath)
  win.show()
  function showFocusBtn (btn) {
    if (!win) return
    focusModalBtn.classList.add('smooth-appear')
    focusModalBtn.classList.remove('disappear')
    focusModalBtn.addEventListener('click', clickHandler)
  }
  function hideFocusBtn () {
    focusModalBtn.classList.add('disappear')
    focusModalBtn.classList.remove('smooth-appear')
    focusModalBtn.removeEventListener('click', clickHandler)
  }
  function clickHandler () {
    win.focus()
  }
})
