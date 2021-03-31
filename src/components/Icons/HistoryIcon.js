import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const HistoryIcon = ({ color, size, style }) => {
	return <Icon name="history" color={color} size={size} style={style} />;
};

HistoryIcon.defaultProps = {
	color: '#FFFFFF',
	size: 18,
};

HistoryIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	style: PropTypes.object,
};

export default HistoryIcon;
