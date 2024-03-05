import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../screens/Landing';
import { TeacherList } from '../screens/TeacherList';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="landing" screenOptions={{ headerShown: false }}>
      <Screen
        name="landing"
        component={Landing}
      />

      <Screen
        name="teacherList"
        component={TeacherList}
      />
    </Navigator>
  );
}