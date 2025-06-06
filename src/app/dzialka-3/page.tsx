import { PlotOffer } from '@/sections/PlotOffer/PlotOffer';
import { PlotStart } from '@/sections/PlotStart/PlotStart';
import { StaticImageData } from 'next/image';
import React from 'react';

import img1 from '../../assets/photos/plot1_gallery/photo_1.jpg';
import img2 from '../../assets/photos/plot1_gallery/photo_2.jpg';
import img3 from '../../assets/photos/plot1_gallery/photo_3.jpg';
import img4 from '../../assets/photos/plot1_gallery/photo_1.jpg';
import img5 from '../../assets/photos/plot1_gallery/photo_2.jpg';
import img6 from '../../assets/photos/plot1_gallery/photo_3.jpg';
import { PlotDescription } from '@/sections/PlotDescription/PlotDescription';
import { PlotOther } from '@/sections/PlotsOther/PlotOther';
import { PlotContact } from '@/sections/PlotContact/PlotContact';

const GALLERY: string[] | StaticImageData[] = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
];

const PLOT_DETAIL: PlotDetails = {
	price: 115000,
	location: 'Pewel Ślemieńska',
	streetAddress: 'Przykładowa 1',
	surface: 1100,
	dimensions: '25 x 44',
	destination: 'budowlana',
	plotNumber: '123/2', 
	approach: 'droga utwardzona',
	media: 'prąd'
}

const page = () => {
	return (
		<>
			<PlotStart
				title='Działka #3'
				heading={
					<>
						Atrakcyjne miejsce <br /> w Beskidzie Żywieckim
					</>
				}
			/>

			<PlotOffer gallery={GALLERY}  details={PLOT_DETAIL}/>

			<PlotDescription>
				<p>
					Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
					aute iure reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim
					ad minim veniam, quis nostrum exercitationem ullam corporis suscipit
					laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
					tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrum exercitationem ullam corporis suscipit
					laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
					dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur.{' '}
				</p>
			</PlotDescription>

			<PlotOther
				heading={<h2>Zobacz pozostałe działki</h2>}
				text='Każda z nich to świetna lokalizacja z widokiem na góry. Zobacz, która działka najlepiej spełnia Twoje oczekiwania.'
			/>

			<PlotContact />
		</>
	);
};

export default page;
