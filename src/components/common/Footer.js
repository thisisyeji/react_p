import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<h1>LOGO</h1>
			<p>2022 LOGO All Right reserved.</p>

			<ul>
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
		</footer>
	);
}

export default Footer;
