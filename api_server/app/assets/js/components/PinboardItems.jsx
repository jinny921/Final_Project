import React, {Component} from 'react';
import PinboardItemRequest from './PinboardItemRequest.jsx'
import PropTypes from 'prop-types';

export default
class PinboardItems extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
  }

  static propTypes = {
    openModal: PropTypes.string
  }

  render() {
    return(
      <div className="container">
        <PinboardItemRequest
          refreshRoom={this.props.refreshRoom}
          post={this.props.posts}
          roomID={this.props.roomID}
          user={this.props.user}
        />
      </div>
    )
  }
}