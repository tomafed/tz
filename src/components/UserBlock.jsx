import React from 'react';
import st from 'styled-components';
import Avatar from './Avatar';
import SelectorContent from './SelectorContent';

const UserBlock = () => {
	return(
		<Content>
			<Avatar />
			<UserBlockContent>
				<User>
					David Gabaraev
				</User>
				<Description>
					username
				</Description>
			</UserBlockContent>
			<SelectorButtonBlock>
				<SelectorContent />
			</SelectorButtonBlock>
		</Content>
	)
};

const Content = st.div`
	margin: 100px 0 30px 0;
`;

const UserBlockContent = st.div`
	text-align: center;
`;

const User = st.div`
    font-size: 35px;
    line-height: 43px;
    margin: 25px 0 5px 0;
`;

const Description = st.div`
    margin: 0 0 30px 0;
    color: ${({theme}) => theme.color.secondary.main};
    font-size: 18px;
    line-height: 22px;
`;

const SelectorButtonBlock = st.div`
	text-align: center;
	margin: 0 0 20px 0;
`;

export default UserBlock;
