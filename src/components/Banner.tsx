import React from 'react'

import { SessionItem } from './SessionItem'
import { Session, sessionList } from '../data/SessionList'
import { ListRenderItemInfo, SafeAreaView } from 'react-native'
import { FlatList, ScrollView, Text, View } from 'native-base'
import { SeparatorItem } from './Separatoritem'

export function Banner() {
  function renderItem({ item }: ListRenderItemInfo<Session>) {
    return <SessionItem {...item} />
  }

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={SeparatorItem}
        data={sessionList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}
/*




import React, { useState } from 'react'

import { View, Text, Image, ImageProps } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

type DataItem = {
image: any
}

const slides = [
  {
    id: '1',
    title: 'Promoção',
    text: 'Super promoção do natal!',
    image: require('../assets/banner01.png'),
  },

  {
    id: '2',
    title: 'Black Friday',
    text: 'As melhores ofertas estão aqui!',
    image: require('../assets/banner02.png'),
  },
]

export default function Banner() {
  //function renderSlides({ item }) {
  const renderSlides = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '90%',
            width: '40%',
          }}
        />

        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    )
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30,
      }}
    />
  )
}
*/
