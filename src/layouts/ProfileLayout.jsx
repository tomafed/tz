import React, {
	useState,
	useEffect,
} from 'react';
import st from 'styled-components';
import { Avatar } from '../components/Avatar';
import SelectorContent from '../components/SelectorContent';

export const ProfileLayout = ({
	children,
}) => {
	const [userData, setUserData] = useState({});
	const [isLoadUserData, setIsLoadUserData] = useState(true);
	const {
		name,
		username,
	} = userData;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/4')
		.then((response) => response.json())
		.then((json) => {
			setUserData(json);
		}).catch(() => {
			alert('User load Error');
		}).finally(() => {
			setIsLoadUserData(false);
		});
	}, []);

	if (isLoadUserData) return 'user load...'

	return(
		<Content>
			<Avatar fullName={name} />
			<UserBlockContent>
				<User>
					{name}
				</User>
				<Description>
					{username}
				</Description>
			</UserBlockContent>
			<SelectorButtonBlock>
				<SelectorContent />
			</SelectorButtonBlock>
			{children(userData)}
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
