import { Sessions } from '@components/Sessions'
import { HomeHeader } from '@components/HomeHeader'
import { VStack, Text, Divider } from 'native-base'
import { Filter } from '@components/Filter'
import { BannerShow } from '@components/BannerShow'

import { SeparatorItem } from '@components/SeparatorItem'
import { ScrollView } from 'react-native-virtualized-view'
import { Promotion } from '@components/Promotion'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Filter />

      <Sessions />

      <ScrollView>
        <VStack flex={1} bg={'gray.50'} marginTop={2}>
          <Text
            fontSize={'lg'}
            marginLeft={4}
            color={'gray.700'}
            borderColor={'blueGray.700'}
          >
            Promoções
          </Text>
          <Promotion />
        </VStack>

        <SeparatorItem />
        <VStack flex={1} bg={'white'}>
          <Text fontSize={'lg'} marginLeft={4} color={'gray.700'}>
            Departamentos
          </Text>
        </VStack>
        <BannerShow />
      </ScrollView>
    </VStack>
  )
}
