import { Pressable, View } from 'react-native';
import { P } from '@/shared/text';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function Button({
  text = false,
  classNames = {
    button: '',
    text: '',
  },
  onPressIn = () => {},
  onPressOut = () => {},
  children,
  ...props
}) {
  const animated = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animated.value,
    };
  });

  return (
    <View className='bg-third rounded-[10px]'>
      <Animated.View style={animatedStyle}>
        <Pressable
          {...props}
          onPressIn={(e) => {
            onPressIn(e);
            animated.value = withTiming(0, { duration: 200 });
          }}
          onPressOut={(e) => {
            onPressOut(e);
            animated.value = withTiming(1, { duration: 500 });
          }}
          className={`bg-second w-full flex items-center justify-center rounded-[10px] h-[60px] ${classNames.button}`}>
          {text ? (
            <P className={`text-contrast text-[20px] ${classNames.text}`}>{text}</P>
          ) : (
            children
          )}
        </Pressable>
      </Animated.View>
    </View>
  );
}
