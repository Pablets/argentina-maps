import React, {useState, useEffect} from 'react';
import {geoEqualEarth, geoOrthographic, geoAzimuthalEquidistant, geoAlbers, geoEquirectangular, geoPath} from 'd3-geo';
import {feature} from 'topojson-client';

const projection = geoEquirectangular().scale(150).translate([500, 250, 50]).rotate([20, 50, -40]);

const SeccionesElectorales = () => {
	const [geographies, setGeographies] = useState([]);

	useEffect(() => {
		fetch('/secciones-electorales.json').then(response => {
			if (response.status !== 200) {
				console.log(`There was a problem: ${response.status}`);
				return;
			}
			response.json().then(worlddata => {
				setGeographies(feature(worlddata, worlddata.objects.collection).features);
			});
		});
	}, []);

	const handleCountryClick = countryIndex => {
		console.log('Clicked on province: ', geographies[countryIndex].properties.NAM);
	};

	const handleMarkerClick = i => {
		console.log('Marker: ', cities[i]);
	};

	return (
		<svg className='map' viewBox='400 140 100 750'>
			<g className='countries'>
				{geographies.map((d, i) => (
					<path key={`path-${i}`} d={geoPath().projection(projection)(d)} className='country' fill={`rgba(38,50,56,${1 /* (1 / geographies.length) * i */})`} stroke='#FFFFFF' strokeWidth={0.03} onClick={() => handleCountryClick(i)} />
				))}
			</g>
			{/* <g className="markers">
        {
          cities.map((city, i) => (
            <circle
              key={ `marker-${i}` }
              cx={ projection(city.coordinates)[0] }
              cy={ projection(city.coordinates)[1] }
              r={ city.population / 3000000 }
              fill="#E91E63"
              stroke="#FFFFFF"
              className="marker"
              onClick={ () => handleMarkerClick(i) }
            />
          ))
        }
      </g> */}
		</svg>
	);
};

export default SeccionesElectorales;
