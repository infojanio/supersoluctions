import React from 'react'

import { BannerItem } from './BannerItem'
import { Banner, bannerList } from '../../data/BannerList'
import { ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { FlatList, View } from 'native-base'
import { SeparatorItem } from '../SeparatorItem'

export function Departament() {
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
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorItem}
        data={bannerList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}
