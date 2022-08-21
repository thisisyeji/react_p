import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
			<AnimatePresence>
				{Open && (
					<motion.aside
						className='pop'
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.5, delay: 0 },
						}}
						exit={{
							opacity: 0,
							scale: 0,
							transition: { duration: 0.5, delay: 0.5 },
						}}>
						<motion.span
							className='close'
							onClick={() => {
								setOpen(false);
							}}
							initial={{ opacity: 0, x: 100 }}
							animate={{
								opacity: 1,
								scale: 1,
								x: 0,
								transition: { duration: 0.4, delay: 0.2 },
							}}
							exit={{
								opacity: 0,
								scale: 1,
								x: 100,
								transition: { duration: 0.3 },
							}}>
							close
						</motion.span>
						<motion.div
							className='con'
							initial={{ opacity: 0, y: 200 }}
							animate={{
								opacity: 1,
								scale: 1,
								y: 0,
								transition: { duration: 0.5, delay: 0.3 },
							}}
							exit={{
								opacity: 0,
								scale: 1,
								y: 200,
								transition: { duration: 0.5, delay: 0.2 },
							}}>
							{children}
						</motion.div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
});

export default Popup;
