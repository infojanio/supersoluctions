import { Category } from '@components/Category'
import { Catalog } from '@components/Catalog'
import { Sessions } from '@components/Sessions'
import { HomeHeader } from '@components/HomeHeader'
import { ScrollView, VStack, Text } from 'native-base'
import { Filter } from '@components/Filter'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Sessions />
      <Filter />

      <ScrollView></ScrollView>
    </VStack>
  )
}
