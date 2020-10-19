import React from 'react'
import Script from 'react-load-script'

export default class ControlShiftMapWidget extends React.Component {
  render() {
    return (
      <>
        <iframe style={{height: '600px', width: '100%'}} src="https://act.fight4flushing.com/local/embed_with_sidebar?filter%5Btypes%5D=%5B%22event%22%2C%22group%22%5D"></iframe>
      </>
    )
  }
}
