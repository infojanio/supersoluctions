import React, { useEffect, useState } from 'react'

import { FlatList, View, Text, Image, Container, HStack } from 'native-base'

import { SeparatorItem } from '../SeparatorItem'
import { TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'

type Props = {
  avatar_url: string
  login: string
  url: string
}

export function AllProduct() {
  const [users, setUsers] = useState([])

  //carrega usuários do github
  function getusers() {
    fetch('https://api.github.com/users') //
      .then((response) => response.json())
      .then((json) => {
        setUsers(json)
      })
  }

  useEffect(() => {
    getusers()
  }, [])

  function renderUser(item: any) {
    return (
      <HStack>
        <Image
          alt="foto"
          source={{ uri: item?.avatar_url }}
          size={16}
          borderRadius="full"
        />
        <View>
          <Text>{item.login}</Text>
          <Text>{item.url}</Text>

          <View>
            <TouchableOpacity>
              <Text>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </HStack>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Produtos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorItem}
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderUser(item)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
