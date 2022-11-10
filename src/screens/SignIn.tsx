import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  View,
  ScrollView,
  IconButton,
} from 'native-base'

import LogoSvg from '@assets/logomarca.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Feather } from '@expo/vector-icons'
import React from 'react'
//import BackgoundImg from '@assets/background.png'

export function SignIn() {
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

      <View bg="green.500" pt="4" pb="4">
        <VStack marginRight="4" marginLeft="4" borderRadius="2xl" bg="gray.100">
          <Center marginTop="4" marginBottom="4" marginRight="2" marginLeft="2">
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <View alignSelf={'flex-start'} mt="0" marginBottom="2"></View>
            <Button title="Entrar com Google" />
            <Button title="ENTRAR" />
            <Center mt={8}>
              <Text mb="4" color="gray.700" fontSize="sm">
                Esqueci a minha senha
              </Text>

              <Text color="gray.700" fontSize="md" mb={3} fontFamily="body">
                Ainda não se cadastrou?
              </Text>
            </Center>

            <Button title="Criar Conta" variant="outline" bg="info.100" />
          </Center>
        </VStack>
      </View>

      <Center my="4" flexDirection="row" alignItems="center" marginLeft={2}>
        <LogoSvg />
        <Text color="gray.700" fontSize="lg">
          JL Soluctions
        </Text>
      </Center>
    </ScrollView>
  )
}
