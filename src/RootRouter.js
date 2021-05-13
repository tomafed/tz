import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import { ProfileInfo } from './pages/ProfileInfo';

import Albums from './pages/Albums';
import Album from './pages/Album';
import { ProfileLayout } from './layouts/ProfileLayout';

const RootRouter = () => {
	return(
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path={[
						'/',
						'/albums'
					]} exact>
						<ProfileLayout>
							{(userData) => (
								<Switch>
									<Route path="/" exact>
										<ProfileInfo userData={userData} />
									</Route>
									<Route path="/albums" exact>
										<Albums userData={userData} />
									</Route>
								</Switch>
							)}
						</ProfileLayout>
					</Route>
					<Route path="/album/:albumId" component={Album} exact />
				</Switch>
			</Router>
		</ThemeProvider>
	)
};

export default RootRouter;