import React, {Component} from 'react';
import { observer } from "mobx-react";
import states from './states'

@observer
 class Index extends Component {

  componentDidMount(){
    // states.timer = setInterval( () => { states.add() }, 1000 )
  }

  componentWillUnmount(){
    clearInterval(states.timer);
  }
  addCountClick(){
      states.add();
      console.log(states.msg);
  }
  render() {
    return (
      <div style={{margin:"40px"}}>
        <span>{states.secend}----{states.msg}</span>

        <div>
    <p>{states.value}</p>
    <p>{states.getValue}</p>
    {/* <p>{states.getTheValue()}</p> */}
    <button onClick={() => states.addValue()}>增加</button>
    <button onClick={() => states.subValue()}>减少</button>
</div>
        <button onClick={this.addCountClick.bind(this)}>change btn</button>
      </div>
    );
  }

}
export default Index