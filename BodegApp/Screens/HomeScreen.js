import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import SignupScreen from './SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Example = () => {
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290" style={{textAlign: 'center'}}>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          !Bienvenidos¡
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs" space={1} >
          Inicia Sesion para continar
        </Heading>

        <VStack space={2} mt="5">
          <FormControl>
            <FormControl.Label>Correo Electronico</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              ¿Olvidaste tu contraseña?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Iniciar Sesion
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Soy un usuario nuevo.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Registrarme 
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
    
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };

    