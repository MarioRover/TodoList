import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faPlus,
  faCheck,
  faTrash,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import colors from './colors';

const FaIcon = ({name, size = 16, color = colors.black}) => {
  let iconName;
  switch (name) {
    case 'chevron-left':
      iconName = faChevronLeft;
      break;
    case 'plus':
      iconName = faPlus;
      break;
    case 'check':
      iconName = faCheck;
      break;
    case 'trash':
      iconName = faTrash;
      break;
    case 'edit':
      iconName = faEdit;
      break;
    default:
      break;
  }

  return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
};

export default FaIcon;
