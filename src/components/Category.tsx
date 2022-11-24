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

export function Category() {
  return (
    <Stack bg="gray.100" pb={2}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={40} width={40} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={40} width={40} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={40} width={40} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={40} width={40} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={40} width={40} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              bg="purple.50"
              borderRadius={24}
              borderWidth="0.5"
              mt="2"
              mb="1"
              ml="4"
              rounded="lg"
              boxSize={24}
            >
              <TouchableOpacity>
                <AccountSvg height={32} width={32} />
                <Text fontSize="xs" pt="2" pb="2" color="black">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </Box>
          </View>
        </VStack>
      </ScrollView>
    </Stack>
  )
}
