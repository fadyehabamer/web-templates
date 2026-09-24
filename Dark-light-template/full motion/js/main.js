var options = {
    bottom: '64px',
    right: '32px',
    time: '0.5s', 
    mixColor: '#fff', 
    backgroundColor: '#fff',  
    buttonColorDark: '#100f2c',  
    buttonColorLight: '#fff', 
    saveInCookies: false,
    label: '🌓',
    autoMatchOsTheme: true,
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  // the widget's only content is the 🌓 emoji; give the toggle a real name
  darkmode.button.setAttribute("aria-label", "Toggle dark mode");