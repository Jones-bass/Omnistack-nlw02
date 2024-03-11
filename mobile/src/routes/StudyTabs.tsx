import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { TeacherList } from '../screens/TeacherList';
import { Favorites } from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export function StudyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Proffys"
      component={TeacherList}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'ios-easel' : 'ios-easel-outline'}
            size={size}
            color={focused ? '#8257e5' : color}
            />
        ),
      }}
    />
    <Tab.Screen
      name="favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'ios-heart' : 'ios-heart-outline'}
            size={size}
            color={focused ? '#8257e5' : color}
            />
        ),
      }}
    />
  </Tab.Navigator>
);
}