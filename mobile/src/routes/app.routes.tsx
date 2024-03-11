
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Landing } from '../screens/Landing';
import { StudyTabs } from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer >
    <Navigator initialRouteName="landing" screenOptions={{ headerShown: false }}>
      <Screen
        name="landing"
        component={Landing}
      />

      <Screen 
        name="study" 
        component={StudyTabs} />

    </Navigator>
    </NavigationContainer>
  );
}