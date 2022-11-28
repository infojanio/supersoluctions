import React from 'react'
import {
  Avatar,
  Center,
  FlatList,
  Heading,
  HStack,
  Text,
  Spacer,
  VStack,
  Image,
  Box,
  Stack,
  View,
} from 'native-base'

import { TouchableOpacity } from 'react-native'

import AccountSvg from '@assets/account.svg'

import ProfileSvg from '@assets/profile1.svg'
import ListSvg from '@assets/list.svg'
import BagSvg from '@assets/bag.svg'

import MeatSvg from '@assets/acougues.svg'
import IceSvg from '@assets/doces.svg'
import CookieSvg from '@assets/biscoito.svg'
import HygieneSvg from '@assets/higiene.svg'
import DrinkSvg from '@assets/drink.svg'
import BabySvg from '@assets/baby.svg'
import PetSvg from '@assets/dog.svg'

const Lista = () => {
  const data = [
    {
      id: '1',
      title: 'Carnes e Peixes',
      path: require('../assets/acougue.png'),
    },
    {
      id: '2',
      title: 'Frios e Laticínios',
      path: require('@assets/acougues.svg'),
    },
    {
      id: '3',
      title: 'Higiene e Perfumaria',
      path: require('@assets/acougues.svg'),
    },
    {
      id: '4',
      title: 'Bebidas',
      path: require('../assets/drink.svg'),
    },
    {
      id: '5',
      title: 'Congelados',
      path: require('@assets/acougues.svg'),
    },
    {
      id: '6',
      title: 'Limpeza',
      path: require('@assets/acougues.svg'),
    },
  ]

  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View flexDirection="column" alignItems="center" ml={4}>
          <Box
            alignItems="center"
            justifyContent="center"
            bg="gray.50"
            borderRadius={24}
            borderColor="gray.300"
            borderWidth="1"
            mt="2"
            ml="1"
            rounded="sm"
            boxSize={24}
          >
            <TouchableOpacity>
              <MeatSvg height={32} width={32} />
            </TouchableOpacity>
          </Box>

          <Text fontSize="xs" pt="1" color="black">
            {item.title}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export function Sessions() {
  return (
    <Stack bg="gray.100" pb={0}>
      <Lista />
    </Stack>
  )
}
