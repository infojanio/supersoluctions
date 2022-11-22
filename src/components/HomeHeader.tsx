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

import { Button } from '@components/Button'
import React from 'react'

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
      <View marginLeft="2">
        <LogoSvg width={iconSize} height={iconSize} />
      </View>

      <Center flex="1" ml="2" mr="8" mt="2" flexDirection="row">
        <Button
          title="Onde entregamos?"
          variant="outline"
          bg="gray.50"
          borderColor="gray.100"
          onPress={() => {
            'função vazia!'
          }}
        />
      </Center>
    </HStack>
  )
}
