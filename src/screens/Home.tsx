import { Category } from '@components/Category'
import { Catalog } from '@components/Catalog'
import { Sessions } from '@components/Sessions'
import { HomeHeader } from '@components/HomeHeader'
import { ScrollView, VStack, Text } from 'native-base'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Sessions />

      <ScrollView></ScrollView>
    </VStack>
  )
}
