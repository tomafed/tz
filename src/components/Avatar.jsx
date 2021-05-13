import React, { memo } from 'react';
import pt from 'prop-types';
import st from 'styled-components';

export const Avatar = memo(({
	fullName,
}) => {
	const [name, surname] = fullName.split(' ');

    return(
        <Content>
			{`${name[0]}${surname[0]}`}
        </Content>
    )
});

Avatar.propTypes ={
	fullName: pt.string.isRequired,
};

const Content = st.div`
	width: 78px;
	height: 78px;
	border-radius: 50%;
	background: #F3F3F3;
	display: flex;
    justify-content: center;
    align-items: center;
	font-size: 35px;
	line-height: 43px;
	margin: 0 auto;
`;
