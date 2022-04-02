import React, { useCallback, FunctionComponent } from 'react';
import { PanGestureHandlerProps } from 'react-native-gesture-handler';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Text,
} from 'react-native';
import {
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken,
  useTheme,
  themeTools,
} from 'native-base';
// import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import AnimatedCheckbox from './animated-checkbox';
import AnimatedTaskLabel from './animated-task-label';
import SwipableView from './swipable-view';
// import { Feather } from '@expo/vector-icons'
import Feather from 'react-native-vector-icons/Feather';
// import { Text } from 'react-native-svg';
Feather.loadFont();

// interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
//   isEditing: boolean;
//   isDone: boolean;
//   onToggleCheckbox?: () => void;
//   onPressLabel?: () => void;
//   onRemove?: () => void;
//   onChangeSubject?: (subject: string) => void;
//   onFinishEditing?: () => void;
//   subject: string;
// }

type TaskItemProps = Pick<PanGestureHandlerProps, 'simultaneousHandlers'> & {
  isEditing: boolean;
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  onChangeSubject?: (subject: string) => void;
  onFinishEditing?: () => void;
  subject: string;
};

const TaskItem: FunctionComponent<TaskItemProps> = ({
  isEditing,
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  onChangeSubject,
  onFinishEditing,
  simultaneousHandlers,
}) => {
  // const {
  //   isEditing,
  //   isDone,
  //   onToggleCheckbox,
  //   subject,
  //   onPressLabel,
  //   onRemove,
  //   onChangeSubject,
  //   onFinishEditing,
  //   simultaneousHandlers
  // } = props

  const theme = useTheme();
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400'),
  );

  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500'),
  );

  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white'),
  );

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText'),
  );

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600'),
  );

  // const highlightColor = useToken(
  //   'colors',
  //   useColorModeValue('blue.500', 'blue.400'),
  // );

  // const boxStroke = useToken(
  //   'colors',
  //   useColorModeValue('muted.300', 'muted.500'),
  // );

  // const checkmarkColor = useToken(
  //   'colors',
  //   useColorModeValue('white', 'white'),
  // );

  // const activeTextColor = useToken(
  //   'colors',
  //   useColorModeValue('darkText', 'lightText'),
  // );

  // const doneTextColor = useToken(
  //   'colors',
  //   useColorModeValue('muted.400', 'muted.600'),
  // );

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject],
  );

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}>
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }>
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}>
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipableView>
  );

  // return (
  //   <HStack
  //     alignItems={'center'}
  //     w="full"
  //     px={4}
  //     py={2}
  //     bg={useColorModeValue('warmGray.50', 'primary.900')}>
  //     <Box width={30} height={30} mr={2}>
  //       <Pressable onPress={onToggleCheckbox}>
  //         <AnimatedCheckbox
  //           highlightColor={highlightColor}
  //           checkmarkColor={checkmarkColor}
  //           boxOutlineColor={boxStroke}
  //           checked={isDone}
  //         />
  //       </Pressable>
  //     </Box>
  //     <AnimatedTaskLabel
  //       strikethrough={isDone}
  //       onPress={onToggleCheckbox}
  //       textColor={activeTextColor}
  //       inactiveTextColor={doneTextColor}>
  //       Task Item
  //     </AnimatedTaskLabel>
  //   </HStack>
  // );
};

export default TaskItem;
