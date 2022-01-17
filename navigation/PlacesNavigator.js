import {createStackNavigator, createAppContainer} from 'react-navigation';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlacesDetailsScreen from '../screens/PlacesDetailsScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const placesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    Placedetails : PlacesDetailsScreen,
    NewPlace : NewPlaceScreen,
    Map : MapScreen
},
    {
        defaultNavigatorOption: {
            headerStyle: {
                backgroundColor : Platform.OS ==='android' ? Colors.primary : ''
            },
            headerTintColor : Platform.OS === 'android' ? 'white' : Colors.primary   
        }
    }
);

export default createAppContainer(placesNavigator);