import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Modal, Popover, OverlayTrigger} from 'react-bootstrap'

export default
class PopupNote extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      title: '',
      content: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  close() {
    this.props.onClose();
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  submitForm(event) {
    axios.post('/api/rooms/1/posts', {
      title: this.state.title,
      content: this.state.content
    }).then(this.close.bind(this));
  }

  render() {
    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field">
              <label htmlFor="note_title" className="label">Title</label>
              <p className="control">
                <input className="input input-description" type="text" value={ this.state.title } name="title" id="note_title" onChange={ this.handleTitleChange } />
              </p>
            </div>
            <div className="field">
              <label htmlFor="note_content" className="label">Content</label>
              <p className="control">
                <textarea className="input input-description" type="text" value={ this.state.content } name="content" id="note_content" onChange={ this.handleContentChange }  />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button is-primary" onClick={ this.submitForm }>Submit</button>
            </p>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}
