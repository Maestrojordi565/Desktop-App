var setTheme = localStorage.getItem('theme')
console.log('theme:', setTheme)
if (setTheme == null){
  swapStyle('dark.css')
}else{
  swapStyle(setTheme)
}
function swapStyle(sheet){
  document.getElementById('theme-setting').href = sheet
  localStorage.setItem('theme', sheet)
}