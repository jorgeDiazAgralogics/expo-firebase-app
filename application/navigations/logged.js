import React from 'react';
import RestaurantsScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantsScreen from "../screens/Restaurants/AddRestaurant";
import LogoutScreen from "../screens/Logout";
import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

console.disableYellowBox = true;

const navigationOptions = {
	navigationOptions: {
		headerStyle: {
			backgroundColor: 'rgba(200, 38, 74, 1)',
		},
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center',
			fontSize: 20,
			color: '#fff',
			fontWeight: 'bold'
		}
	}
};

const leftIcon = (navigation, icon) => <Icon
	name={icon}
	style={{marginLeft: 20}}
	size={20}
	color="white"
	onPress={() => navigation.openDrawer()}
/>;

const rightIcon = (navigation, icon) => <Icon
	name={icon}
	style={{marginLeft: 20}}
	size={30}
	color="white"
	onPress={() => navigation.navigate('ListRestaurants')}
/>;

const restaurantsScreenStack = createStackNavigator(
    {
		ListRestaurants: {
			screen: RestaurantsScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Restaurantes',
				headerLeft: leftIcon(navigation, 'bars')
			})
		},
		AddRestaurant: {
			screen: AddRestaurantsScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Añadir restaurante',
				headerRigth: rightIcon(navigation, 'home'),
				headerLeft: leftIcon(navigation, 'bars')

			})
		}
    },
    navigationOptions
);

const LogoutScreenStack = createStackNavigator({
	LogoutScreen: {
		screen: LogoutScreen,
		navigationOptions: ({navigation}) => ({
			title: 'Cerrar sesión',
			headerLeft: leftIcon(navigation, 'bars')
		})
	}
});

export default createDrawerNavigator(
    {
		RestaurantsScreen: {
			screen: restaurantsScreenStack,
			navigationOptions: ({navigation}) => ({
				drawerLabel: 'Restaurantes',
				drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color: tintColor}} />)
			})
		},
		LogoutScreen: {
			screen: LogoutScreenStack,
			navigationOptions: ({navigaion}) => ({
				drawerLabel: 'Cerrar sesión',
				drawerIcon: ({tintColor}) => (<Icon name="sign-out" size={24} style={{color: tintColor}} />)
			})
		}
    },
	{
		drawerBackgroundColor : 'rgba(128, 35, 60, 0.7)',
		contentOptions: {
			activeTintColor: 'white',
			activeBackgroundColor : 'transparent',
			inactiveTintColor : 'white',
			itemsContainerStyle: {
				marginVertical: 0,
			}
		},
	}
)