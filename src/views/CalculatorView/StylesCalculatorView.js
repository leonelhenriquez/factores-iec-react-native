import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	viewStyle: {
		fontSize: 25,
		paddingLeft: 5,
		paddingRight: 5,
	},
	input: {
		fontSize: 16,
		marginTop: 16,
	},
	txtResultado: {
		marginBottom: 24,
		marginTop: 24,
		fontWeight: 'normal',
		fontFamily: 'Poppins-Bold',
		fontSize: 18,
		backgroundColor: '#08ad9d',
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 16,
		paddingRight: 16,
		borderRadius: 36,
		elevation: 3,
	},
	gridContainer: {
		marginLeft: 32,
		marginRight: 32,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 32,
		paddingTop: 8,
	},
	btn: {
		flex: 1,
		flexDirection: 'column',
		margin: 5,
		color: '#FFF',
	},
});

export default styles;
