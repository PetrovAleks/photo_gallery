import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../pages/main';
import Discover from '../pages/discover';
import Header from '../components/header/header';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/main" exact component={Main} />
				<Route path="/discover" component={Discover} />
				<Redirect to="/main" />
			</Switch>
		</>
	);
}

export default App;
