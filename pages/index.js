import React from 'react';

import SeccionesElectorales from '../components/SeccionesElectorales';
import LimitesProvinciales from '../components/LimitesProvinciales';
import Viewer from '../components/Viewer';
import SeccionesElectoralesCapital from '../components/SeccionesElectoralesCapital';

const Page = () => {
	return (
		<>
			<Viewer>
				{/* <SeccionesElectorales /> */}
				<LimitesProvinciales />
				{/* <SeccionesElectoralesCapital /> */}
			</Viewer>
		</>
	);
};

export default Page;
