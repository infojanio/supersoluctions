import React from 'react'

import { TouchableOpacity } from 'react-native'
import {
  Center,
  HStack,
  Icon,
  useTheme,
  Text,
  Button,
  Alert,
  Stack,
} from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'
import LocationSvg from '@assets/location.svg'
import { Input } from '@components/Input'

const LogoImage =
  'https://play-lh.googleusercontent.com/BbcUGwdG1x5mJc-WXOwIblcYhmpyFPdBaunDHoWgS2L1ZUMeIncz1XZgKt7K1EKFHA=w240-h480'

export function HomeProduct() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  function OpenLogo() {
    console.log('Abrir janela da logoMarca')
  }

  return (
    <HStack
      bg="green.600"
      paddingBottom={2}
      paddingTop={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <TouchableOpacity>
        <Icon
          as={<MaterialIcons name="reorder" />}
          size={8}
          mr={2}
          _light={{
            color: 'gray.100',
          }}
          _dark={{
            color: 'gray.700',
          }}
        />
      </TouchableOpacity>

      <Center flex="1" pr={4} ml="2" mr="2" mt="1" flexDirection="row">
        <Input
          flex={1}
          borderRadius="md"
          borderBottomWidth={1}
          size="sm"
          placeholder="Buscar produtos"
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />{' '}
      </Center>

      <Text fontWeight={'bold'} fontSize={14} color="red.500" mr={2}>
        R$ 0,00
      </Text>

      <TouchableOpacity>
        <Icon
          as={<MaterialIcons name="shopping-cart" />}
          size={6}
          mr={4}
          _light={{
            color: 'gray.100',
          }}
          _dark={{
            color: 'gray.700',
          }}
        />
      </TouchableOpacity>
    </HStack>
  )
}
