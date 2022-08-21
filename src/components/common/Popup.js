import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const Popup = forwardRef(({ children }, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	useEffect(() => {
		Open
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	}, [Open]);

	return (
		<>
			{Open && (
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
			)}
		</>
	);
});

export default Popup;
