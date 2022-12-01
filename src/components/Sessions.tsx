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

import MeatSvg from '@assets/acougues.svg'
import IceSvg from '@assets/doces.svg'
import CookieSvg from '@assets/biscoito.svg'
import HygieneSvg from '@assets/higiene.svg'
import DrinkSvg from '@assets/drink.svg'
import BabySvg from '@assets/baby.svg'
import PetSvg from '@assets/dog.svg'

export function Sessions() {
  return (
    <Stack bg="gray.100" pb={0}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack>
          <View flexDirection="column" alignItems="center" ml={1}>
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
                <MeatSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" color="black">
                  Carnes {'\n'}& Peixes
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <IceSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" color="black">
                  Frios {'\n'}& Laticínios
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <HygieneSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Higiene {'\n'}& Perfumaria
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Bebidas
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Congelados
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Limpeza
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Bebê
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Pães e Bolos
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Descartáveis
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Molhos e Conservas
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Sorvetes
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Biscoitos e Salgadinhos
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Hortifruti
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
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
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Pet Shop
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1}>
            <Box
              alignItems="center"
              justifyContent="center"
              bg="gray.50"
              borderRadius={24}
              borderColor="gray.300"
              borderWidth="1"
              mt="2"
              ml="1"
              mr="2"
              rounded="sm"
              boxSize={24}
            >
              <TouchableOpacity>
                <DrinkSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Outros
                </Text>
              </TouchableOpacity>
            </Box>
          </View>
        </HStack>
      </ScrollView>
    </Stack>
  )
}
