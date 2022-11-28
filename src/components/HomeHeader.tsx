import { TouchableOpacity } from 'react-native'
import {
  AddIcon,
  Center,
  Heading,
  HStack,
  Icon,
  Text,
  useTheme,
  View,
  VStack,
  Button,
} from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

//import { Button } from '@components/Button'
import React from 'react'

import { UserPhoto } from './UserPhoto'
import LocationSvg from '@assets/location.svg'

export function HomeHeader() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  return (
    <HStack
      bg="green.600"
      paddingBottom={4}
      paddingTop={4}
      justifyContent="space-between"
      alignItems="center"
    >
      {/*
      <View marginLeft="2">
        <LogoSvg width={iconSize} height={iconSize} />
      </View>
  */}

      <UserPhoto
        source={{
          uri:
            'https://play-lh.googleusercontent.com/BbcUGwdG1x5mJc-WXOwIblcYhmpyFPdBaunDHoWgS2L1ZUMeIncz1XZgKt7K1EKFHA=w240-h480',
        }}
        alt="Logomarca do estabelecimento"
        size={16}
        mr="4"
      />

      <Center flex="1" ml="1" mr="4" mt="2" flexDirection="row">
        <Button
          bg="gray.100"
          color="gray.700"
          variant="ghost"
          borderColor="gray.100"
          leftIcon={<LocationSvg height={32} width={32} />}
          onPress={() => {
            'função vazia!'
          }}
          _light={{
            color: 'gray.200',
          }}
          _dark={{
            color: 'gray.700',
          }}
        >
          Informe o local de entrega
        </Button>
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
