import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from './utils/axiosWithAuth';
class Friends extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => { };
    formatData = () => {
        const formatData = [];
        console.log(this.state.friends)
    }
    axiosWithAuth()
        .get('/data')
        .then(res => {
        this.setState({
            friends: res.data.data.filter(
                friend =>
                    friend.name ===}
        )
            < div className = "key spinner" >
                <Loader type="Puff" color="#204963" height="60" width="60" />
                <p>Loading Data</p>
          </div >
            })
        })
    }
}