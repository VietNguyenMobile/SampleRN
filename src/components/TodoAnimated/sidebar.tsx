import React, { useCallback } from 'react';
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
} from 'native-base';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import AnimatedColorBox from './animated-color-box';
import ThemeToggle from './theme-toggle';
// import { Feather } from '@expo/vector-icons'
import Feather from 'react-native-vector-icons/Feather';
import MenuButton from './menu-button';
Feather.loadFont();

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const currentRoute = state.routeNames[state.index];

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('TodoAnimated_Main');
  }, [navigation]);
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('TodoAnimated_About');
  }, [navigation]);

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}>
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700'),
            }}
          />
        </HStack>
        <Avatar
          // source={require('../assets/profile-image.png')}
          // /TodoAnimated/profile-image.jpeg
          source={require('../../assets/TodoAnimated/profile-image.jpeg')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          Viet Nguyen Mobile Developer
        </Heading>
        <MenuButton
          active={currentRoute === 'TodoAnimated_Main'}
          onPress={handlePressMenuMain}
          icon="inbox">
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === 'TodoAnimated_About'}
          onPress={handlePressMenuAbout}
          icon="info">
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  );
};

export default Sidebar;
