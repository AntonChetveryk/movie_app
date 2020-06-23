import React from 'react'

import Header from './Header/Header'

class Layout extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div className="Layout">
        <Header user={auth.user} />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
