import { FC, useEffect, useRef, useState } from 'react';
import styles from './VideoPlayer.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

export type VideoPlayerProps = {
	src: string;
	poster?: string;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ src, poster }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [showOverlay, setShowOverlay] = useState(true);

	const handlePlay = () => {
		videoRef.current?.play();
		setShowOverlay(false);
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const onEnded = () => {
		    setShowOverlay(true);
		};

		video.addEventListener('ended', onEnded);

		return () => {
			video.removeEventListener('ended', onEnded);
		};
	}, []);

	return (
		<div className={styles.container}>
			<video
				className={styles.video}
				controls
				poster={poster}
				preload='none'
				controlsList='nodownload'
				ref={videoRef}>
				<source src={src} type='video/mp4' />
				Twoja przeglądarka nie wspiera odtwarzania wideo.
			</video>

			{showOverlay && (
				<div className={styles.overlay} onClick={handlePlay}>
					<Icon className={styles.icon} icon='octicon:play-24' />
				</div>
			)}
		</div>
	);
};
