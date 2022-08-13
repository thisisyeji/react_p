import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	const path = process.env.PUBLIC_URL;
	const style = {
		color: 'rgb(255, 181, 0)',
		border: '1px solid rgb(255, 181, 0)',
	};
	return (
		<header>
			<h1>
				<span className='hidden'>ACAUA DI PARMA</span>
				<Link to='/'>
					<img src={path + '/img/logo_ho.png'} alt='logo' />
				</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/about' activeStyle={style}>
						ABOUT
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

			<FontAwesomeIcon icon={faFaceSmile} />

			<div className='gnb_right'>
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
