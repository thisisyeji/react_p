import { useEffect } from 'react';

function Popup({ setOpen, children }) {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'auto';
		};
	}, []);

	return (
		<aside className='pop'>
			<span
				className='close'
				onClick={() => {
					setOpen(false);
				}}>
				close
			</span>
			<div className='con'>{children}</div>
		</aside>
	);
}

export default Popup;
