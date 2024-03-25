import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTabId: 'Home',
    savedList: [],
  }

  changeTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideoItem = videoItem => {
    const {savedList} = this.state
    const index = savedList.findIndex(eachItem => eachItem.id === videoItem.id)
    if (index === -1) {
      this.setState({
        savedList: [...savedList, videoItem],
      })
    } else {
      const updatedList = savedList.filter(
        eachItem => eachItem.id !== videoItem.id,
      )
      this.setState({savedList: updatedList})
    }
  }

  render() {
    const {isDarkTheme, savedList, activeTabId} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedList,
          activeTabId,
          changeTabId: this.changeTabId,
          addVideoItem: this.addVideoItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
