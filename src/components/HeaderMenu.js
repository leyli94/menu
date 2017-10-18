import React, { Component } from 'react';

class HeaderMenu extends Component {
  constructor(props){
    super(props);
    this.state={isOpened:false};
  }
  toggleState(){
    this.setState({isOpened:!this.state.isOpened})
  }
  render() {
    let drop;
    if(this.state.isOpened){
      drop= <div> my dropdownText </div>
    }
    return (<ul onClick={this.toggleState.bind(this)}>
           {this.props.items.map((item,index)=>
            <li key={index}> <a href={item.link}>{item.label} </a></li> )}
           {drop}
    </ul> );
  }
}

export default HeaderMenu;
