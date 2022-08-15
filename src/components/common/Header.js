import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	const gnbMo = useRef(null);

	const path = process.env.PUBLIC_URL;
	const style = {
		color: 'rgb(255, 181, 0)',
		border: '1px solid rgb(255, 181, 0)',
		textShadow: 'none',
	};
	return (
		<header className={type}>
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

			<FontAwesomeIcon
				icon={faFaceSmile}
				onClick={() => {
					gnbMo.current.classList.toggle('on');
				}}
			/>

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

			<div className='mobile' ref={gnbMo}>
				<Link to='/' className='logo_mo'>
					<img src={path + '/img/logo_ho.png'} alt='logo' />
				</Link>

				<ul id='gnb_mo'>
					<li>
						<NavLink
							to='/about'
							onClick={() => {
								gnbMo.current.classList.remove('on');
							}}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/youtube'
							onClick={() => {
								gnbMo.current.classList.remove('on');
							}}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/gallery'
							onClick={() => {
								gnbMo.current.classList.remove('on');
							}}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/community'
							onClick={() => {
								gnbMo.current.classList.remove('on');
							}}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/location'
							onClick={() => {
								gnbMo.current.classList.remove('on');
							}}>
							Location
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/members'
							onClick={() => {
								gnbMo.current.classList.remove('on');
							}}>
							Members
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
