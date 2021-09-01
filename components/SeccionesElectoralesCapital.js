import React from 'react';
import {ComposableMap, Geographies, Geography, ZoomableGroup} from 'react-simple-maps';

// const geojsonPath = './districtos-electorales.json';
const geojsonPath = './circuito_01.json';

// const projection = geoEquirectangular();

// const moveHandler = position => {
// 	console.log(position);
// };

const SeccionesElectoralesCapital = () => {
	return (
		<ComposableMap
			className='capital'
			projection='geoMercator'
			// projectionConfig={{
			// 	rotate: [10, 1, 0],
			// 	center: [-58, -34],
			// 	scale: 630
			// }}
			>
			{/* <ZoomableGroup
				center={[-58.4441, -34.6097]}
				zoom={400}
				minZoom={400}
				maxZoom={1000}
				translateExtent={[
					[0, 0],
					[150, 150]
				]}> */}
			<Geographies geography={geojsonPath}>{({geographies}) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)}</Geographies>
			{/* </ZoomableGroup> */}
		</ComposableMap>
	);
};

export default SeccionesElectoralesCapital;
