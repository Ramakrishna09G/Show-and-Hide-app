// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="show-hide-page-bg-container">
        <div className="show-hide-page-container">
          <h1 className="main-heading">Show/Hide</h1>
          <div className="names-container">
            <div className="name-block">
              <button
                type="button"
                onClick={this.onShowFirstName}
                className="button"
              >
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="name">Joe</p>}
            </div>
            <div className="name-block">
              <button
                type="button"
                onClick={this.onShowLastName}
                className="button"
              >
                Show/Hide Lastname
              </button>
              {showLastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
