import React from 'react';
import './react-header.css';

const ReactHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
          <h1>React List</h1>
          <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default ReactHeader;
