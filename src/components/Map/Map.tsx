import React from 'react';

export const Map = ({ className }: {className?: string}) => {
	return (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.9979759997602!2d19.33717886362251!3d49.68958364261766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714298830cb0107%3A0xa984b4e9ca64ca5f!2zUGV3ZWwgxZpsZW1pZcWEc2th!5e1!3m2!1spl!2spl!4v1748874058461!5m2!1spl!2spl'
			className={className}
			width='600'
			height='450'
			allowFullScreen={false}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'></iframe>
	);
};
