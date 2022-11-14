import React, { Component } from 'react'
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  View,
  ScrollView,
  Icon,
  IconButton,
  Box,
  IIconProps,
  IIconButtonProps,
  AddIcon,
  Stack,
} from 'native-base'

import LogoSvg from '@assets/logomarca.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { RectButtonProps } from 'react-native-gesture-handler'
//import BackgoundImg from '@assets/background.png'

/*
interface Props extends RectButtonProps {
  title: string
  icon: React.FC<IIconButtonProps>
}
*/

export function SignUp() {
  const [show, setShow] = React.useState(false) //mostra senha
  const handleClick = () => setShow(!show)

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        space={24}
        direction="row"
        marginTop="8"
        marginBottom="2"
        marginLeft="4"
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

        <Center color="gray.100" fontSize="2xl" mb={2} paddingTop="0.5">
          <Text fontSize="xs"> CADASTRO</Text>
        </Center>
      </VStack>

      <View>
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Text fontSize="sm" color="gray.500">
            Dados do sistema
          </Text>

          <Center marginTop="4" marginBottom="4" marginRight="1" marginLeft="1">
            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
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
                placeholder="Nome completo" // mx={4}
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
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="email" />}
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
                placeholder="E-mail" // mx={4}
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
                keyboardType="phone-pad"
                autoCapitalize="none"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="phone" />}
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
                placeholder="(62) 99999-9999" // mx={4}
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
          </Center>
        </VStack>
      </View>

      <View marginBottom="0.5">
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.50">
          <Text fontSize="sm" color="gray.500">
            Endereço
          </Text>

          <Center marginTop="4" marginBottom="4" marginRight="1" marginLeft="1">
            <Box w="100%">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="home" />}
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
                placeholder="Cidade" // mx={4}
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
                keyboardType="phone-pad"
                autoCapitalize="none"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="post-add" />}
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
                placeholder="CEP" // mx={4}
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
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="content-paste" />}
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
                placeholder="Bairro" // mx={4}
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
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="info-outline" />}
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
                placeholder="Rua, quadra, lote" // mx={4}
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
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="perm-device-info" />}
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
                placeholder="Complemento" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
            </Box>
          </Center>
        </VStack>
      </View>

      <View marginLeft="4" marginRight="4" marginTop="1">
        <Button title="Criar Conta" variant="outline" bg="gray.200" />
      </View>
    </ScrollView>
  )
}
