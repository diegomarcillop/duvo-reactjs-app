import React, { Component } from 'react';

export default function withDataFetching(endpoint, WrappedComponent) {
    return class extends Component {
        constructor(...props) {
            super(...props);
            this.state = { data: [] }
        }
        
        async componentDidMount() {
            fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                     this.setState({ data })
                })
                .catch(err => console.log(err.message));
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }


}
