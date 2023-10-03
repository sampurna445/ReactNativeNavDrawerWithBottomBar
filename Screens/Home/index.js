import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};

export default HomeScreen;
