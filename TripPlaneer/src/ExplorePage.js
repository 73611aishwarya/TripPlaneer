import React from 'react';
import sataraImage from './images/satara.jpg';
import AuraImage from './images/Aurangabad.jpg';
import MatheranImage from './images/matheran.jpg';
import PratapgadImage from './images/Pratapgad.jpg';
import VennaImage from './images/Venna Lake.jpg';
import WaterfallImage from './images/Waterfall.jpg';
import CavesImage from './images/ajanta.jpg';
import PawanaImage from './images/Pawana.jpg';
import './ExplorePage.css';

function ExplorePage() {
  const destinations = [
    { name: 'Kass Pathar', description: 'The City of Lights', image: sataraImage },
    { name: 'Bibi ka Maqbara ', description: 'Tomb of the Lady', image: AuraImage },
    { name: 'Matheran', description: 'Coolest place', image: MatheranImage },
    { name: 'Pratapgad', description: 'Fort', image: PratapgadImage },
    { name: 'Venna', description: 'Venna Lake', image: VennaImage },
    { name: 'Nanemachi Waterfall', description: 'WaterFall', image: WaterfallImage },
    { name: 'Ajanta Caves ', description: 'Famous', image: CavesImage },
    { name: 'Pawana Lake', description: 'Pleasent place', image: PawanaImage },
  ];

  return (
    <div className="explore-page">
      <h1>Our Services</h1>
      <div className="destination-grid">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <img src={dest.image} alt={dest.name} />
            <h2>{dest.name}</h2>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
