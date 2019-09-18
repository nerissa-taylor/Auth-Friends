import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axiosWithAuth from './utils/axiosWithAuth';
class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data.data.filter(
                        friend => friend.name === 'Ryan' && (friend.id === 3)
                    )
                });
            })
            .catch(err => console.log(err));
    };

    formatData = () => {
        const formattedData = [];
        console.log(this.state.friends);
        this.state.friends.forEach((name, age, email, index, arr) => {
            if (this.state.friend.name === '') {
                formattedData.push({
                    name: this.state.friend.name,
                    age: this.state.friend.age,
                    email: this.state.friend.email,
                    id: this.state.friend.id

                });
            };
        });
        return formattedData;
    };
    render() {
        const friends = this.formatData();
        console.log(friends);
        return (
            <div>
                <p>Looking for Friends</p>

                {this.props.fetchingData && (
                    <div className="key spinner">
                        <Loader type="Puff" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )},

            <div className="friends">
                    <h2>My Friends</h2>
                    {friends.map(friend => (
                        <div key={friend.id}>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>email: {friend.email}</p>
                        </div>

                    ))}
                </div>
            </div>
        );
    };
}





export default FriendsList;
