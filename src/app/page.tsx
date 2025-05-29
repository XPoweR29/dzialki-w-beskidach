import { Wrapper } from '@/components/Wrapper/Wrapper';
import styles from './page.module.scss';
import { Home_start } from '@/sections/home_start/home_start';
import { Home_offer } from '@/sections/home_offer/home_offer';

export default function Home() {
	return (
		<>
			<Home_start />
			<Home_offer/>
		</>
	);
}
