import  React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, View } from "react-native";


const Example = () => {
  return    (
    <View>
       <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
  }


    export default () => {
        return (
                <Example />
        );
    };