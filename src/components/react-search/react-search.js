import React, {Component} from 'react';
import './react-search.css';

export default class ReactSearch extends Component {

  state = {
    term: ''
  };

  onSearchItem = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchItem(term);
  };

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="search"
        value={this.state.term}
        onChange={this.onSearchItem}></input>
    );  
  }
}
