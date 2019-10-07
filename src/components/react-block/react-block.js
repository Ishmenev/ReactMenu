import React, {Component} from 'react';
import ReactHeader from '../react-header';
import ReactSearch from '../react-search';
import ReactList from '../react-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAdd from '../item-add';
import './react-block.css';

export default class ReactBlock extends Component {

  maxId = 100;

  state = {
    reactData: [
      this.createDataItem('Learn React'),
      this.createDataItem('Make Awesome App'),
      this.createDataItem('Build Own Project')
    ],
    term: '',
    filter: 'all'
  };

  createDataItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };

  textAdded = (text) => {
    const newElement = this.createDataItem(text);      

    this.setState(({reactData}) => {
      const newAddedData = [
        ...reactData,
        newElement
      ];
  
      return {
        reactData: newAddedData
      }
    })
  };

  onDeletedString = (id) => {
    this.setState(({reactData}) => {
      const idx = reactData.findIndex((el) => el.id === id);

      const newReactData = [...reactData.slice(0, idx), 
      ...reactData.slice(idx + 1)];

      return {
        reactData: newReactData
      }
    });
  };  

  onToggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

     return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  };

  onToggleDone = (id) => {
    this.setState(({reactData}) => {
      return {
        reactData: this.onToggleProperty(reactData, id, 'done')
      }
    })
  };

  onToggleImportant = (id) => {
    this.setState(({reactData}) => {
      return {
        reactData: this.onToggleProperty(reactData, id, 'important')
      }
    })
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  onSearchItem = (term) => {
    this.setState({term});
  }

  search(reactData, term) {
    if (reactData.length === 0) {
      return reactData;
    }

    return reactData.filter((item) => {
      return item.label.toLowerCase()
          .indexOf(term.toLowerCase()) > -1;
    });
  };

  filter(reactData, filter) {
    switch(filter) {
      case 'all':
        return reactData;
      case 'active':
        return reactData.filter((item) => !item.done);
      case 'done':
        return reactData.filter((item) => item.done);
      default:
        return reactData;
    }
  }

  render() {
    const {reactData, term, filter} = this.state;

    const visibleItem = this.filter(this.search(reactData, term), filter);

    const doneCount = this.state.reactData
                        .filter((el) => el.done).length;

    const todoCount = this.state.reactData.length - doneCount;

    return (
      <div className="todo-app">
        <ReactHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <ReactSearch
          onSearchItem={this.onSearchItem}/>
          <ItemStatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange}/>
        </div>
        <ReactList 
        array = {visibleItem}
        onToggleDone = {this.onToggleDone}
        onToggleImportant = {this.onToggleImportant}
        onDeletedString = {this.onDeletedString}/>
        <ItemAdd textAdded={this.textAdded}/>
      </div>
    );
  }
}
  