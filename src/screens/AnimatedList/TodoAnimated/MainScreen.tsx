// import { View, Text } from 'react-native';

import React, { useCallback, useState, FunctionComponent } from 'react';
import {
  Icon,
  VStack,
  useColorModeValue,
  themeTools,
  useTheme,
  useColorMode,
  Fab,
  Center,
  Box,
  Text,
} from 'native-base';
import { Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AnimatedColorBox from '../../../components/TodoAnimated/animated-color-box';
import TaskList from '../../../components/TodoAnimated/task-list';
import TaskItem from '../../../components/TodoAnimated/task-item';
import shortid from 'shortid';
import Masthead from '../../../components/TodoAnimated/masthead';
import NavBar from '../../../components/TodoAnimated/navbar';
import ThemeToggle from '../../../components/TodoAnimated/theme-toggle';
import AnimatedCheckbox from '../../../components/TodoAnimated/animated-checkbox';

AntDesign.loadFont();

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamType } from '../../../navigation/TodoAnimated';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: true,
  },
];

type MainScreenProps = NativeStackScreenProps<
  DrawerParamType,
  'TodoAnimated_Main'
>;

const MainScreen: FunctionComponent<MainScreenProps> = ({
  navigation,
  route,
}) => {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState('Task Item');
  const [isEditing, setIsEditing] = useState(false);

  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev);
  }, []);

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);

  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        subject: newSubject,
      };
      return newData;
    });
  }, []);

  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null);
  }, []);

  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item.id);
  }, []);

  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item);
      return newData;
    });
  }, []);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full">
      <Masthead
        title="What's up, Viet Nguyen!"
        image={require('../../../assets/TodoAnimated/masthead.png')}>
        <NavBar />
      </Masthead>

      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px">
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
};

export default MainScreen;
