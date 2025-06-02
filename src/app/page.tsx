import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomeOffer } from '@/sections/HomeOffer/HomeOffer';
import { HomePlots } from '@/sections/HomePlots/HomePlots';
import { HomeVideo } from '@/sections/HomeVideo/HomeVideo';
import { HomeMap } from '@/sections/HomeMap/HomeMap';

export default function Home() {
	return (
		<>
			<HomeStart />
			<HomeOffer/>
			<HomePlots/>
			<HomeVideo/>
			<HomeMap/>
		</>
	);
}
