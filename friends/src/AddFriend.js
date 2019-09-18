import React from 'react';

class AddFriend extends React.Component {
    state = {
        id: "7",
        name: '',
        age: 0,
        email: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateFriend = () => {
        const { id, name, age, email } = this.state
        this.setState({ ...this.state })
    }
    render() {
        console.log('state', this.state)
        return (
            <div>
                <input
                    type="number"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                    placeholder="id"
                />
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="name"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleChange}

                />
                <input
                    type="email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <button onClick={this.updateFriend}>Update Friend</button>
                {this.props.error ? <p>Error!</p> : null}
            </div>
        )
    }
}
export default AddFriend;