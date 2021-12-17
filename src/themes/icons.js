import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faPlus,
  faCheck,
  faTrash,
  faEdit,
  faTimes,
  faSortAmountDown,
  faFilter,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import colors from './colors';

const FaIcon = ({name, size = 16, color = colors.black, style}) => {
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
    case 'times':
      iconName = faTimes;
      break;
    case 'sort':
      iconName = faSortAmountDown;
      break;
    case 'filter':
      iconName = faFilter;
      break;
    case 'chevron-down':
      iconName = faChevronDown;
      break;
    case 'github':
      iconName = faGithub;
      break;
    default:
      break;
  }

  return <FontAwesomeIcon icon={iconName} size={size} color={color} style={style} />;
};

export default FaIcon;
