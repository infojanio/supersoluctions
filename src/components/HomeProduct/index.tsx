import React from 'react'

import { TouchableOpacity } from 'react-native'
import {
  Center,
  HStack,
  Icon,
  useTheme,
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
      paddingBottom={4}
      paddingTop={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Center flex="1" pr={4} ml="1" mr="1" mt="1" flexDirection="row">
        <Input
          type="text"
          InputRightElement={
            <Stack
              width={260}
              maxWidth={260}
              direction={{
                md: 'row',
              }}
              space="4"
            />
          }
        />
      </Center>

      <TouchableOpacity>
        <Icon
          as={<MaterialIcons name="logout" />}
          size={6}
          mr={4}
          _light={{
            color: 'gray.200',
          }}
          _dark={{
            color: 'gray.700',
          }}
        />
      </TouchableOpacity>
    </HStack>
  )
}
