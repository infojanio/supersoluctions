import React from 'react'
import { HStack, Text, ScrollView, Box, Stack, View } from 'native-base'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { authNavigatorRoutesProps } from '@routes/auth.routes'

import ListSvg from '@assets/favorite.svg'
import RegisterSvg from '@assets/account.svg'
import RequestSvg from '@assets/pedidos.svg'
import DeliverySvg from '@assets/location.svg'

export function Sessions() {
  const navigation = useNavigation<authNavigatorRoutesProps>()

  //Criar nova conta, preciso fazer ajustes no routes/index.tsx , acertar a navegação auth
  function handleNewAccount() {
    navigation.navigate('signUp')
  }

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
              <TouchableOpacity onPress={handleNewAccount}>
                <RegisterSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" color="black">
                  Cadastre-se
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
                <ListSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" color="black">
                  Lista Salva
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
                <RequestSvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Pedidos
                </Text>
              </TouchableOpacity>
            </Box>
          </View>

          <View flexDirection="column" alignItems="center" ml={1} mr={2}>
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
                <DeliverySvg height={50} width={50} />
                <Text fontSize="xs" pt="1" textAlign="center" color="black">
                  Entrega
                </Text>
              </TouchableOpacity>
            </Box>
          </View>
        </HStack>
      </ScrollView>
    </Stack>
  )
}
