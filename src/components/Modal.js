import React, { Component } from 'react';
import './Modal.css';

function Modal(props){
  const { openModal } = props;
  const { closeModal } = props;
  const { inputValue } = props;
  const { getValueTodo } = props;
  return (
    <div className={openModal ? 'modal show' : 'modal'}>
      <div className="title">
        <span className="close" onClick={closeModal}><a href="#">X</a></span>
      </div>
      <div className="content">
        <input type="text" placeholder="Add new todo" onChange={getValueTodo} value={inputValue}/>
      </div>
      <div className="footer">
        <a href="#" className="btn btn-success">Add</a>
      </div>
    </div>
  )
}

export default Modal;