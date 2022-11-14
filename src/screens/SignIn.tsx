import React from 'react'
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  View,
  ScrollView,
  IconButton,
  Box,
  Icon,
  Divider,
  Flex,
  Stack,
} from 'native-base'

import LogoSvg from '@assets/logomarca.svg'
import GoogleSvg from '../../assets/google.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
//import BackgoundImg from '@assets/background.png'

export function SignIn() {
  const [show, setShow] = React.useState(false) //mostra senha
  const handleClick = () => setShow(!show)

  // const { signInWithGoogle, signInWithApple } = useAuth() //contexto de autenticação

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        space={2}
        alignItems="center"
        direction="row"
        marginTop="8"
        marginLeft="2"
      >
        {['sm'].map((size) => (
          <IconButton
            borderRadius="full"
            size={size}
            variant="outline"
            _icon={{
              as: Feather,
              name: 'chevron-left',
            }}
          />
        ))}
      </VStack>

      <View
        justifyContent="center"
        color="green.700"
        fontSize="2xl"
        mb={4}
        paddingTop="0.5"
        paddingLeft="10"
      >
        <Text
          fontFamily="heading"
          fontWeight="bold"
          fontSize="3xl"
          color="green.700"
        >
          Olá!
        </Text>

        <Text>Acesse sua conta ou cadastre-se</Text>
      </View>

      <View bg="green.500" pt="4" pb="18">
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Center marginTop="4" marginBottom="4" marginRight="2" marginLeft="2">
            <Box w="100%">
              <Input
                keyboardType="phone-pad"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="phone" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.400',
                    }}
                  />
                }
                placeholder="(62) 0 0000-0000" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>

            <Box w="100%">
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Stack
                    maxWidth={32}
                    direction={{
                      md: 'row',
                    }}
                    space="4"
                  >
                    <Button
                      borderRadius="none"
                      size={'sm'}
                      backgroundColor="gray.50"
                      title=""
                      ml={1}
                      onPress={handleClick}
                      variant="solid"
                      rightIcon={
                        <Icon
                          as={MaterialIcons}
                          name="visibility"
                          size="lg"
                          m={2}
                          _light={{
                            color: 'black',
                          }}
                          _dark={{
                            color: 'gray.300',
                          }}
                        />
                      }
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </Stack>
                }
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'gray.300',
                    }}
                  />
                }
                placeholder="Senha" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>
            <View alignSelf={'flex-start'} mt="0" marginBottom="2"></View>

            <Button title="ENTRAR" />

            <Center mt={4}>
              <Text mb="4" color="green.700" fontSize="sm">
                Esqueci a minha senha
              </Text>

              <Box w="324">
                <Divider my={12} bgColor="gray.300" borderBottomWidth="1.5" />
              </Box>

              <Text
                color="green.700"
                fontSize="sm"
                fontWeight="bold"
                mt={4}
                mb={2}
                fontFamily="body"
              >
                AINDA NÃO TENHO CADASTRO
              </Text>
            </Center>

            <Button title="Criar Conta" variant="outline" bg="gray.200" />
          </Center>
        </VStack>

        <Center my="2" flexDirection="row" alignItems="center" marginLeft={2}>
          <LogoSvg />
          <Text
            color="gray.100"
            fontWeight="extrabold"
            fontSize="lg"
            fontStyle="italic"
          >
            CompreApp
          </Text>
        </Center>
      </View>
    </ScrollView>
  )
}
