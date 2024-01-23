// src/components/LandingPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import './LandingPage.css';

const SeshCard = ({ sesh, expanded, setExpanded }) => {
  const [cardHeight, setCardHeight] = useState('auto');

  const isExpanded = sesh.id === expanded;

  const handleCardClick = () => {
    setCardHeight(isExpanded ? 'auto' : '100%');
    setExpanded(isExpanded ? null : sesh.id);
  };

  return (
    <div
      className={`sesh-card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleCardClick}
      style={{ height: cardHeight }}
    >
      <div className="visible-info">
        <strong>{sesh.location}</strong>
        <p>Hosted by {sesh.host}</p>
      </div>
      {isExpanded && (
        <div className="expanded-details">
          <p>Details: {sesh.details}</p>
          <p>Expected Number of People: {sesh.expectedPeople}</p>
          <p>Amount of Weed: {sesh.amountOfWeed}</p>
          <p>Means of Consumption: {sesh.meansOfConsumption}</p>
          <p>Contact: {sesh.contact}</p>
        </div>
      )}
    </div>
  );
};

const LandingPage = () => {
  const [expanded, setExpanded] = useState(null);


  const ongoingSeshes = [
    { id: 1, location: 'OBH Single', details: 'Chill vibes', host: 'John', expectedPeople: 5, amountOfWeed: '5-10g', meansOfConsumption: 'Joint', contact: 'john@example.com' },
    { id: 2, location: 'Pump', details: 'Music and snacks', host: 'Jane', expectedPeople: 8, amountOfWeed: '10-15g', meansOfConsumption: 'Bong', contact: 'jane@example.com' },
    { id: 3, location: 'Bakul', details: 'Board games and laughter', host: 'Mike', expectedPeople: 6, amountOfWeed: '15-20g', meansOfConsumption: 'Edibles', contact: 'mike@example.com' },
    { id: 4, location: 'H305', details: 'Movie night', host: 'Sarah', expectedPeople: 10, amountOfWeed: '5-10g', meansOfConsumption: 'Joint', contact: 'sarah@example.com' },
    // Add more seshes as needed
  ];

  return (
    <div className="landing-page">
      <h1>
        <Icon icon={['fas', 'cannabis']} size="lg" /> Welcome to Sesh
      </h1>
      <div className="sesh-list">
        <div className="sesh-list-banner">
          <h2>Ongoing Seshes</h2>
        </div>
        <div className="sesh-cards">
          {ongoingSeshes.map((sesh) => (
            <SeshCard
              key={sesh.id}
              sesh={sesh}
              expanded={expanded === sesh.id}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
      <div className="actions">
        <button className="host-button">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          Host a Sesh
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
