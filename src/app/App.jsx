import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import Main from '../pages/main';
import Discover from '../pages/discover';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import PopupImg from '../components/popupImg/popupImg';

import { state } from '../store/store';

const App = observer(() => {
	return (
		<Fragment>
			<Header />
			{state.renderPopup ? <PopupImg /> : null}
			<Switch>
				<Route path="/main" exact component={Main} />
				<Route path="/discover" component={Discover} />
				<Redirect to="/main" />
			</Switch>
			<Footer />
		</Fragment>
	);
});

export default App;
