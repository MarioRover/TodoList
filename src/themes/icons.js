import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import colors from './colors';

const ChevronLeft = ({size = 14, color = colors.black}) => {
  return <FontAwesomeIcon icon={faChevronLeft} size={size} color={color} />;
};
const Plus = ({size = 14, color = colors.black}) => {
    return <FontAwesomeIcon icon={faPlus} size={size} color={color} />;
  };

export {
    ChevronLeft,
    Plus
}