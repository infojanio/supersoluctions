import {
  Heading,
  HStack,
  Icon,
  Text,
  useTheme,
  View,
  VStack,
} from 'native-base'
import React from 'react'

import LogoSvg from '@assets/logo.svg'

export function HomeHeader() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[24]

  return (
    <VStack bg="gray.100">
      <VStack>
        <Heading>
          <LogoSvg width={iconSize} height={iconSize} />
        </Heading>
        <View color="gray.600">
          <Text>Compre App</Text>
        </View>
      </VStack>
    </VStack>
  )
}
