import React, {Component} from 'react';
import './react-list-item.css';

export default class ReactListItem extends Component {


  render() {
    const {label, 
            onDeletedString, 
            onToggleDone, 
            onToggleImportant, 
            done, important} = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    };
    if (important) {
      classNames += ' important';
    };

    const style = {
      color: "green"
    };
  
    return (
      <span className={classNames}>
        <span 
          className="todo-list-item-label" 
          style = {style}
          onClick = {onToggleDone}>
            {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"
          onClick = {onToggleImportant}/>
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeletedString}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
