import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

const PlacesListScreen = props => {
    return (
        <View>
            <Text>PlaceListScreen</Text>
        </View>
    );
    
};

PlacesListScreen.navigationOptions = {
    headerTitle:'allplaces'
};

const styles = StyleSheet.create({});

export default PlacesListScreen;