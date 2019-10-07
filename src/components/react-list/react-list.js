import React from 'react';
import ReactListItem from '../react-list-item/react-list-item';
import './react-list.css';

const ReactList = ({array, onToggleDone, onToggleImportant, onDeletedString}) => {
  const elements = array.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <ReactListItem 
        {...itemProps}
        onToggleDone = {() => onToggleDone(id)}
        onToggleImportant = {() => onToggleImportant(id)}
        onDeletedString = {() => onDeletedString(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group list-column">
      {elements}
    </ul>
  );
};

export default ReactList;