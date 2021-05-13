import React, { Component } from 'react';
import st from 'styled-components';

class Container extends Component {
    render() {
        const { children } = this.props;
        return(
            <Content>
				{ children }
            </Content>
        )
    }
};

const Content = st.div`
	margin: 0 auto;
	width: 960px;
	max-width: 100%;
`;

export default Container;
