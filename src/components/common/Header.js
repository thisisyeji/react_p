import { Link, NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/department'>DEPARTMENT</NavLink>
				</li>
				<li>
					<NavLink to='.youtube'>YOUTUBE</NavLink>
				</li>
				<li>
					<NavLink to='/gallery'>GALLERY</NavLink>
				</li>
				<li>
					<NavLink to='/community'>COMMUNITY</NavLink>
				</li>
				<li>
					<NavLink to='/location'>LOCATION</NavLink>
				</li>
				<li>
					<NavLink to='/members'>MEMBERS</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
