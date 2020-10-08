import React from 'react'
import Script from 'react-load-script'
import './actionNetwork.scss'

export default class ActionNetworkWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = { randomHash: Math.random() * 1000 }
  }

  handleFormLoaded() {
    setTimeout(() => {
      document
        .querySelector('#can-form-area-1145c83b38cdf945008f00fdaa57c933322dfae1')
        .classList.add('loaded')
    }, 100)
  }
  render() {
    return (
      <>
        {/* add random number to script URL cos otherwise the widget won't be inserted if this page is loaded a second time */}
        <Script
          url={`https://actionnetwork.org/widgets/v3/form/1145c83b38cdf945008f00fdaa57c933322dfae1?format=js&source=widget&hash=${this.state.randomHash}`}
          onLoad={this.handleFormLoaded.bind(this)}
        />
        <div id="can-form-area-1145c83b38cdf945008f00fdaa57c933322dfae1"></div>
      </>
    )
  }
}
