interface City {
  center: google.maps.LatLngLiteral;
  population: number;
  color: string;
}

const citymap: Record<string, City> = {
    1: {center:     {lat:28.998889250,lng:113.348857723},   population: 1,    color: '#ff0000',  },
    2: {center:     {lat:28.998050583,lng:113.350802553},   population: 1,    color: '#ff0099',  },
    3: {center:     {lat:28.998064379,lng:113.353665648},   population: 1,    color: '#ccff00',  },
    4: {center:     {lat:28.995441888,lng:113.352399206},   population: 1,    color: '#cc6600',  },
    5: {center:     {lat:28.996166517,lng:113.351122188},   population: 1,    color: '#cc0000',  },
    6: {center:     {lat:28.996611905,lng:113.349939259},   population: 1,    color: '#cc3399',  },
    7: {center:     {lat:28.996487667,lng:113.348503336},   population: 1,    color: '#993300',  },
    8: {center:     {lat:28.996058169,lng:113.347377199},   population: 1,    color: '#993399',  },
    9: {center:     {lat:28.995749036,lng:113.346886561},   population: 1,    color: '#66cc00',  },
    10: {center:    {lat:28.996597083,lng:113.346881231},   population: 1,    color: '#33ff00',  },
    11: {center:    {lat:28.997913158,lng:113.348504660},   population: 1,    color: '#ccff00',  },
    "4+": {center:  {lat:28.9958042025,lng:113.351760697},  population: 1,    color: '#cc6600',  },
};

function initMap(): void {
  // Create the map.
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 18,
      center: { lat: 28.9937899, lng: 113.3472627 },
      mapTypeId: 'satellite',
    }
  );

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: citymap[city].color,
      strokeOpacity: 0.2,
      strokeWeight: 2,
      fillColor: citymap[city].color,
      fillOpacity: 0.05,
      map,
      center: citymap[city].center,
      radius: 300,
    });
    new google.maps.Marker({
      position: citymap[city].center,
      map,
      title: city + '-' + JSON.stringify(citymap[city].center),
      label: `${city}`,
    });
  }
  const flightPlanCoordinates = [
    {lat:28.998889250, lng:113.348857723},
    {lat:28.998050583, lng:113.350802553},
    {lat:28.998064379, lng:113.353665648},
    {lat:28.995441888, lng:113.352399206},
    {lat:28.996166517, lng:113.351122188},
    {lat:28.996611905, lng:113.349939259},
    {lat:28.996487667, lng:113.348503336},
    {lat:28.996058169, lng:113.347377199},
    {lat:28.995749036, lng:113.346886561},
    {lat:28.996597083, lng:113.346881231},
    {lat:28.997913158, lng:113.348504660},
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
//CGC2000
