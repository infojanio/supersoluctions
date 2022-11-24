import { Category } from '@components/Category'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { ScrollView, VStack } from 'native-base'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group />
      <ScrollView>
        <Category />
      </ScrollView>
    </VStack>
  )
}
