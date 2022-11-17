import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'

import { Cart } from '@screens/Cart'
import { Menu } from '@screens/Menu'
import { Request } from '@screens/Request'
import { Search } from '@screens/Search'

type AppRoutes = {
  home: undefined
  search: undefined
  cart: undefined
  request: undefined
  menu: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

//rotas da aplicação
export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="search" component={Search} />
      <Screen name="cart" component={Cart} />
      <Screen name="request" component={Request} />
      <Screen name="menu" component={Menu} />
    </Navigator>
  )
}
