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

export function Group() {
  return (
    <Stack bg="gray.300" pb={0}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack>
          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.700"
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Cadastre-se
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Lista
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Localização
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Pedidos
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Cadastre-se
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Cadastre-se
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Cadastre-se
            </Text>
          </View>

          <View flexDirection="column" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              ml="1"
              rounded="full"
              boxSize={20}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
              </TouchableOpacity>
            </Box>
            <Text fontSize="xs" pt="2" pb="2" color="black">
              Cadastre-se
            </Text>
          </View>
        </HStack>
      </ScrollView>
    </Stack>
  )
}
