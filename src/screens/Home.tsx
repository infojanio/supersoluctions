import { Category } from '@components/Category'
import { Catalog } from '@components/Catalog'
import { Sessions } from '@components/Sessions'
import { HomeHeader } from '@components/HomeHeader'
import { ScrollView, VStack, Text } from 'native-base'
import { Filter } from '@components/Filter'
import { Banner } from '@components/Banner'
import { SliderItem } from '@components/SliderItem'
import { SeparatorItem } from '@components/Separatoritem'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Filter />
      <SeparatorItem />
      <SliderItem />
      <Sessions />

      <ScrollView></ScrollView>
    </VStack>
  )
}
