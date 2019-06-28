import React from 'react';
import { Link } from 'react-router-dom';
import {inject,observer} from 'mobx-react'
@inject('homeStore')
@observer
class Home extends React.Component {
    componentDidMount() {
        // this.props.homeStore.getList();
    }
    changeClick(){
        // console.log(this.props.homeStore);
        this.props.homeStore.getList();
    }
    render() {
        return (
            <div>
                <p>{this.props.homeStore.title}</p>
                <button onClick={this.changeClick.bind(this)}>change name</button>
                <Link to="/about">go to About</Link>
                <Link to="/test">go to test</Link>
            </div>
        );
    }
}

export default Home;