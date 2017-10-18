import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu'

const menu =[
  {
    link:'/articles',
    label:'Articl'
  },
  {
    link:'/contactes',
    label:'Contact'
  },
  {
    link:'/posts',
    label:'Post'
  }
];
class Header extends Component {
  render() {
    return (<div>

       <HeaderMenu items={menu}/>
      </div>);
  }
}

export default Header;
