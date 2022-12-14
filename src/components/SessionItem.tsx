import { Text, View, Box, FlatList, Image } from 'native-base'
import React from 'react'
import { ImageBase } from 'react-native'

import { Session, sessionList } from '../data/SessionList'

export function SessionItem({ title, image }: Session) {
  return (
    <FlatList
      data={sessionList}
      keyExtractor={(item) => String(item.id)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
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
            boxSize={24}
          >
            {item.image}
          </Box>

          <Text fontSize="xs" pt="1" color="black">
            {item.title}
          </Text>
        </View>
      )}
    />
  )
}
