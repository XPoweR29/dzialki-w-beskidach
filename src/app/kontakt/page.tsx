import { ContactContent } from '@/sections/ContactContent/ContactContent';
import { ContactStart } from '@/sections/ContactStart/ContactStart';
import React from 'react';

const page = () => {
	return (
		<>
			<ContactStart />
            <ContactContent/>
		</>
	);
};

export default page;
