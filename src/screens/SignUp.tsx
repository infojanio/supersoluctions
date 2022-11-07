import { VStack, Center, Text, Heading, View, ScrollView } from 'native-base'

import LogoSvg from '@assets/logomarca.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
//import BackgoundImg from '@assets/background.png'

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.300" px={10} pb={16}>
        {/*
      <Image
        source={BackgoundImg}
        alt="Pessoa comprando online"
        resizeMode="contain"
        position="absolute"
        height={700}
      />
      */}

        <Center my={20}>
          <LogoSvg width={220} height={60} />

          <Heading color="green.700" fontSize="lg">
            JL Soluctions
          </Heading>
        </Center>

        <Center>
          <Heading color="green.700" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <View alignSelf={'flex-start'} mt="0" marginBottom="4">
            <Text color="red.900" fontSize="sm">
              Esqueci a senha
            </Text>
          </View>

          <Button title="Cadastrar" />

          <Button title="Criar Conta" variant="outline" mt={12} />
        </Center>
      </VStack>
    </ScrollView>
  )
}
