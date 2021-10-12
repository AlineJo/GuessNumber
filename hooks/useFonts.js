import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    'font-roboto-light': require('../assets/fonts/Roboto-Light.ttf'),
    'font-roboto-thin': require('../assets/fonts/Roboto-Thin.ttf'),
    'font-roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
 
  });

export default useFonts;