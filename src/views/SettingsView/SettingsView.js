import * as React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import Settings from '../../Settings';
import AppTheme from '../../theme/AppTheme';
import SettingsEvent from './Event/SettingsEvent';
import Utils from '../../utils/Utils';

class SettingsView extends React.Component {
	constructor(props) {
		super(props);

		this.maxPositionAnimation = Dimensions.get('window').height / 2;

		this.state = {
			visible: false,
			decimalPrecision: Settings.decimal_precision,
			sliderValue: Settings.decimal_precision,
			translateYAnimation: new Animated.Value(this.maxPositionAnimation),
		};
	}

	componentDidMount() {
		SettingsEvent.addEvent(this.showDialog, this.hideDialog);
		this.showDialog();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.visible !== this.state.visible && !this.state.visible) {
			this.resetAnimation();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextState.visible !== this.state.visible ||
			nextState.decimalPrecision !== this.state.decimalPrecision ||
			nextState.sliderValue !== this.state.sliderValue ||
			nextState.translateYAnimation !== this.state.translateYAnimation
		);
	}

	hideDialog = () => {
		Utils.saveSettings();
		this.setState({
			visible: false,
		});
	};

	showDialog = () => {
		this.setState({
			visible: true,
			decimalPrecision: Settings.decimal_precision,
			sliderValue: Settings.decimal_precision,
		});
		this.showDialogAnimation();
	};

	showDialogAnimation = () => {
		Animated.timing(this.state.translateYAnimation, {
			toValue: 0,
			duration: Settings.animationTiming,
			useNativeDriver: true,
		}).start();
	};

	resetAnimation = () => {
		this.setState({
			translateYAnimation: new Animated.Value(this.maxPositionAnimation),
		});
	};

	changeDecimalPresicion = val => {
		Settings.decimal_precision = parseInt(Math.round(val).toString(), 10);
		this.setState({ decimalPrecision: val });
		Utils.saveSettings();
	};

	changeSliderValue = val => {
		this.setState({ sliderValue: parseInt(Math.round(val).toString(), 10) });
	};

	render() {
		const { visible } = this.state;
		return (
			<Animated.View>
				<Portal>
					<Dialog
						theme={AppTheme.dialog}
						visible={visible}
						onDismiss={this.hideDialog}
						style={{
							...styles.dialog,
							transform: [
								{
									translateY: this.state.translateYAnimation,
								},
							],
						}}
					>
						<Dialog.Title>
							<View style={styles.titleView}>
								<SettingsIcon size={24} style={styles.icon} />
								<Paragraph style={styles.title}>Configuraciones</Paragraph>
							</View>
						</Dialog.Title>
						<Dialog.Content>
							<Paragraph>
								Presicisión decimal: {this.state.sliderValue}
							</Paragraph>
							<Slider
								maximumValue={Settings.max_decimal_precision}
								minimumValue={Settings.min_decimal_precision}
								onValueChange={this.changeSliderValue}
								onSlidingComplete={this.changeDecimalPresicion}
								value={this.state.decimalPrecision}
								style={styles.slider}
								minimumTrackTintColor="#FFFFFF"
								maximumTrackTintColor="rgba(0,0,0,0.4)"
								thumbTintColor="#FFF"
							/>
						</Dialog.Content>
						<Dialog.Actions>
							<Button theme={AppTheme.dialog} onPress={this.hideDialog}>
								Cerrar
							</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	dialog: {
		backgroundColor: AppTheme.dialog.colors.background,
		transform: [
			{
				translateY: 0,
			},
		],
	},
	titleView: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		textAlignVertical: 'center',
	},
	title: {
		fontFamily: 'Poppins-Bold',
		fontWeight: 'normal',
		fontSize: 20,
		alignSelf: 'stretch',
		textAlignVertical: 'center',
		paddingTop: 6,
	},
	icon: {
		margin: 5,
		padding: 5,
	},
	slider: {
		marginTop: 16,
		marginBottom: 8,
	},
});

export default SettingsView;
