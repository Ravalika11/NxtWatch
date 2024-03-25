import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTabId: 'Home',
  changeTabId: () => {},
  savedList: [],
  addVideoItem: () => {},
})

export default ThemeAndVideoContext
