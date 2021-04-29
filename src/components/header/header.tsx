import React from 'react';

import SiteNav from '../siteNav/siteNav';
import Clock from '../clock/clock';

const Header = (): JSX.Element => {
	return (
		<header className="header">
			<div className="container d-flex">
				<SiteNav />
				<Clock />
			</div>
		</header>
	);
};

export default Header;
