//使用
import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
// import './App.css';
//import appStore from './Mobx/appStore';

@inject('appStore')
@observer
class TEST1 extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  componentWillMount(){
    const {appStore}=this.props
    console.log(appStore)
  }
  addCount=()=>{
    const {appStore}=this.props
    appStore.addCount()
    this.setState({

    })
  }
  subCount=()=>{
    const {appStore}=this.props
    appStore.subCount()
  }
  changeText(e){
    console.log(e.target.value)
    // appStore.changeCount(e.target.value)
    this.props.appStore.changeCount(e.target.value)
  }
  render() {
    let {appStore}=this.props
    return (
      <div className="App">
        <button onClick={this.subCount}>-</button>
        <input type="text" value={appStore.counter} onChange={(e)=>this.changeText(e)}/>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }
}
export default TEST1;