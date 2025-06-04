import { PlotOffer } from '@/sections/PlotOffer/PlotOffer'
import { PlotStart } from '@/sections/PlotStart/PlotStart'
import { StaticImageData } from 'next/image'
import React from 'react'

//FIXME: it would be better if dynamic import from directory
import img1 from '../../assets/photos/plot1_gallery/photo_1.jpg';
import img2 from '../../assets/photos/plot1_gallery/photo_2.jpg';
import img3 from '../../assets/photos/plot1_gallery/photo_3.jpg';
import img4 from '../../assets/photos/plot1_gallery/photo_1.jpg';
import img5 from '../../assets/photos/plot1_gallery/photo_2.jpg';
import img6 from '../../assets/photos/plot1_gallery/photo_3.jpg';


const GALLERY: string[] | StaticImageData[] = [
  img1, img2, img3, img4, img5, img6, 
]
const page = () => {
  return (
		<>
			<PlotStart />
			<PlotOffer gallery={GALLERY} />
		</>
	);
}

export default page