import * as React from 'react';
import { default as IconVectorIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const Icon = ({ name, color, size, style }) => (
	<IconVectorIcon name={name} color={color} size={size} style={style} />
);

Icon.defaultProps = {
	color: '#FFFFFF',
	size: 18,
};

Icon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	style: PropTypes.object,
};

export default Icon;
