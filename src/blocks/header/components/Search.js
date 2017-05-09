import React from 'react';

class Search extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {value: ''};
    
    this.toggleChange =  this.toggleChange.bind(this);
  }
  
  toggleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    return (
      <div className='search'>
        <form id='searchForm'>
          <input placeholder='Поиск' 
               onChange={this.toggleChange} 
               type='search'
               className='search__controller' 
          />
          <i aria-hidden='true'
            className='fa fa-search search__icon' />
        </form>
      </div>
      );
  }
}

export { Search };