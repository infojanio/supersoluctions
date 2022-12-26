import React from 'react'

import { BannerItem } from './BannerItem'
import { Banner, bannerList } from '../../data/BannerList'
import { ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { FlatList, View } from 'native-base'
import { SeparatorItem } from '../SeparatorItem'

export function BannerShow() {
  function renderItem({ item }: ListRenderItemInfo<Banner>) {
    return (
      <TouchableOpacity>
        <BannerItem {...item} />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        // ListHeaderComponent={PromotionShow} Aceita outro componente dentro da lista
        ItemSeparatorComponent={SeparatorItem}
        data={bannerList}
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
