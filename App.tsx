import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/index.';
import { Loading } from '@components/Loading';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NewGroup } from '@screens/NewGroup';


export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
          />
        {/* { fontsLoaded ? <Groups /> : <Loading />} */}
        { fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
