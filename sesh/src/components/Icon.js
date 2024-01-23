// src/components/Icon.js
import React from 'react';
import { faCannabis, faCoffee, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap = {
  cannabis: faCannabis,
  coffee: faCoffee,
  userFriends: faUserFriends,
};

const Icon = ({ name, size, color }) => {
  const selectedIcon = iconMap[name] || faCannabis; // Default to cannabis icon if the specified icon is not found
  return <FontAwesomeIcon icon={selectedIcon} size={size} color={color} />;
};

export default Icon;
