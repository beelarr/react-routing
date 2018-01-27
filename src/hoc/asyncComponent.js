import React, { Component } from 'react';

const asyncComponent = importComponent => {
    return class extends Component {

        state = {
            component: null
        };


        componentDidMount () {
            importComponent()
                .then(e => this.setState({component: e.default}) )

        }


        render() {
            const C = this.state.component;
            return (
                C ? <C {...this.props} /> : null
            )
        }
    }
};

export default asyncComponent