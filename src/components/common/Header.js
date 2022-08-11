import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	const style = { color: 'salmon' };
	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/department' activeStyle={style}>
						DEPARTMENT
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeStyle={style}>
						YOUTUBE
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeStyle={style}>
						GALLERY
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeStyle={style}>
						COMMUNITY
					</NavLink>
				</li>
				<li>
					<NavLink to='/location' activeStyle={style}>
						LOCATION
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeStyle={style}>
						MEMBERS
					</NavLink>
				</li>
			</ul>

			<div className='gnb_right'>
				<FontAwesomeIcon icon={faFaceSmile} />
				<ul className='social'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebookF} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
