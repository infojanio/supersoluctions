import { useTheme } from 'native-base'

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import HomeSvg from '@assets/home.svg'
import SearchSvg from '@assets/search.svg'
import CartSvg from '@assets/cart.svg'
import RequestSvg from '@assets/request.svg'
import MenuSvg from '@assets/history.svg'

import { Home } from '@screens/Home'
import { Search } from '@screens/Search'
import { Cart } from '@screens/Cart'
import { Request } from '@screens/Request'
import { Menu } from '@screens/Menu'

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
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[8]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.blueGray[800],
        tabBarStyle: {
          backgroundColor: colors.gray[100],
          borderTopWidth: 1,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <SearchSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <CartSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="request"
        component={Request}
        options={{
          tabBarIcon: ({ color }) => (
            <RequestSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => (
            <MenuSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
    </Navigator>
  )
}
