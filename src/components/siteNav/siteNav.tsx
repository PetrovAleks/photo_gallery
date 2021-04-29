import React from 'react';
import { NavLink } from 'react-router-dom';

const SiteNav = (): JSX.Element => {
	return (
		<nav className="header-nav">
			<ul className="header-nav__list list-style d-flex">
				<li className="header-nav__item">
					<NavLink
						to="/main"
						className="header-nav__link"
						activeClassName="header-nav__item--active"
					>
						Main
					</NavLink>
				</li>
				<li className="header-nav__item">
					<NavLink
						to="/discover"
						className="header-nav__link"
						activeClassName="header-nav__item--active"
					>
						Discover
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SiteNav;
