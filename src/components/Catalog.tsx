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
  ScrollView,
  Box,
  Stack,
  View,
} from 'native-base'

type Props = {
  name: string
}

import { TouchableOpacity } from 'react-native'

import AccountSvg from '@assets/account.svg'

import ProfileSvg from '@assets/profile1.svg'
import ListSvg from '@assets/list.svg'
import BagSvg from '@assets/bag.svg'

export function Catalog() {
  return (
    <Stack bg="gray.100" pb={0}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack>
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
              boxSize={16}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="1" color="black">
              Cadastre-se
            </Text>
          </View>

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
              boxSize={16}
            >
              <TouchableOpacity>
                <ListSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="1" color="black">
              Lista
            </Text>
          </View>

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
              boxSize={16}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="1" color="black">
              Lista
            </Text>
          </View>

          <View flexDirection="column" alignItems="center" ml={2}>
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
              boxSize={16}
            >
              <TouchableOpacity>
                <BagSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="1" color="black">
              Pedidos
            </Text>
          </View>
        </HStack>
      </ScrollView>
    </Stack>
  )
}
