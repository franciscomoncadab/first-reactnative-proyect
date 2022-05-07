import React from 'react';
import { View, Text } from 'react-native'
import cosas from '../data/cosas'
import Icon from 'react-native-vector-icons/FontAwesome5';

const CosasList = () => {
     return(
          <View>
               {cosas.map(repo => (
                    <View key={cosas.id}>
                         <Text>{repo.about.substring(0, 20)}</Text>
                         <Text>{repo.author}</Text>
                         {cosas.tags.map(tag => (
                              <Text key={tag}>{tag}</Text>
                         ))}
                         <Icon size={24} color="gray" name="comments" />
                    </View>
               ))}
          </View>
     )
}

export default CosasList