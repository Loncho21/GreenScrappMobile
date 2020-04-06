import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '@components/Header/Header';


const Stack = createStackNavigator();

//screens
import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" >
        <Stack.Screen 
            name={'SplashScreen'} 
            component={SplashScreen} 
            options={{
                header: ({ navigation,scene, previous, route}) => {
                  const { options } = scene.descriptor;
                  const title =
                    options.headerTitle !== undefined
                      ? options.headerTitle
                      : options.title !== undefined
                      ? options.title
                      : scene.route.name; 
                  return <Header
                    // icoback={require('../assets/close.png')}
                    title={title}
                    alternativeText={'Iniciar sesión'}
                    logo={require('../assets/logo.png')}
                    back={
                      previous ? navigation.goBack : undefined
                    }
                    alternativeButton={() => navigation.navigate('LoginScreen')}
                    {...navigation}
                    {...route}
                    />
                }
            }}
        />
        <Stack.Screen
          name={'LoginScreen'}
          component={LoginScreen}
          options={{
            header: ({ navigation,scene, previous, route}) => {
              const { options } = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name; 
              return <Header
                icoback={require('../assets/close.png')}
                title={'Iniciar sesión'}
                alternativeText={'Regístrate'}
                logo={require('../assets/logo.png')}
                back={
                  previous ? navigation.goBack : undefined
                }
                {...navigation}
                {...route}
                />
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
