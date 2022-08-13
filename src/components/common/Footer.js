import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	const path = process.env.PUBLIC_URL;
	return (
		<footer>
			<div className='upper'>
				<h1>
					<p className='hidden'>ACQUA DI PARMA</p>
					<img src={path + '/img/logo_ver.png'} alt='logo' />
				</h1>

				<ul className='left'>
					<li>home</li>
					<li>products</li>
					<li>lookbook</li>
					<li>about</li>
				</ul>

				<ul className='right'>
					<li>contact</li>
					<li>terms</li>
					<li>faq</li>
					<li>shipping/returns</li>
				</ul>
			</div>

			<div className='lower'>
				<dl>
					<dt>newsletter</dt>
					<dd>
						<img src={path + '/img/envel.png'} alt='email' />
					</dd>
				</dl>
				<p>2022 LOGO All Right reserved.</p>
				<ul className='social'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebookF} />
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
