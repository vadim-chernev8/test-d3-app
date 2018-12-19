import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getEODdataReq } from '../actions/app-actions'

class EOD extends Component {
  state = {
    value: '',
  }

  onChange = (e) => this.setState({value: e.target.value})

  render() {
    const { getEODdataReqAction } = this.props
    const { value } = this.state
    
    return (
      <div className='data-container' style={{ height: '100vh' }}>
        <div className="container-input">
          <input type="text" onChange={this.onChange} value={value} />
          <button onClick={() => getEODdataReqAction({ TICKER: value })}>Get Infoo !!!</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = ({
  getEODdataReqAction: getEODdataReq
})

export default connect(null, mapDispatchToProps)(EOD)
