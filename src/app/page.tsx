import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomeOffer } from '@/sections/HomeOffer/HomeOffer';
import { HomePlots } from '@/sections/HomePlots/HomePlots';

export default function Home() {
	return (
		<>
			<HomeStart />
			<HomeOffer/>
			<HomePlots/>
		</>
	);
}
