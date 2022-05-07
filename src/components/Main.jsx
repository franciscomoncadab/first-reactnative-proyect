import React from 'react';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import CosasList from './CosasList'

const Main = () => {
     return (
          <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
               <Text>Rate Repository Application</Text>
               <CosasList/>
          </View>
     )
}

export default Main