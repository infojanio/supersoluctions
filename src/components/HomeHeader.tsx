import { TouchableOpacity } from 'react-native'
import {
  Center,
  Heading,
  HStack,
  Icon,
  Text,
  useTheme,
  View,
  VStack,
} from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import { Button } from '@components/Button'
import React from 'react'

import { UserPhoto } from './UserPhoto'
import LogoSvg from '@assets/logomarca.svg'

export function HomeHeader() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[10]

  return (
    <HStack
      bg="green.500"
      paddingBottom={2}
      paddingTop={2}
      justifyContent="space-between"
      alignItems="center"
    >
      {/*
      <View marginLeft="2">
        <LogoSvg width={iconSize} height={iconSize} />
      </View>
  */}

      <UserPhoto
        source={{ uri: 'https://avatars.githubusercontent.com/u/59238443?v=4' }}
        alt="Image do usuário"
        size={16}
        mr="4"
      />

      <Center flex="1" ml="2" mr="8" mt="2" flexDirection="row">
        <Button
          title="Seu local de entrega"
          variant="outline"
          bg="gray.50"
          borderColor="gray.100"
          onPress={() => {
            'função vazia!'
          }}
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
