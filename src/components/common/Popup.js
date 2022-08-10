function Popup({ setOpen, children }) {
	return (
		<aside>
			<span
				className='CLOSE'
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
