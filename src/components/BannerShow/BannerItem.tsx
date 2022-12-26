import React from 'react'
import { FlatList, Text, Box, View } from 'native-base'

import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

import { Banner } from '@data/BannerList'

export function BannerItem({ id, title, image }: Banner) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 180, height: 140 }} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 2,
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6F4E37',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#000',
  },
})

/*
return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={departmentList}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
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
              <Image
                source={item.image}
                style={{
                  width: 80,
                  height: 80,
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#f9d7d4',
                  resizeMode: 'contain',
                  margin: 8,
                }}
              />
              <Text fontSize="xs" pt="1" color="black">
                {item.title}
              </Text>
            </TouchableOpacity>
          </Box>
        </View>
      )}
    />
  )
}

  */
