import React from 'react'
import { Button } from 'native-base'

import SearchSvg from '@assets/search.svg'
import { View } from 'native-base'

export function Filter() {
  return (
    <View ml="2" mr="2" pt="2" pb="2">
      <Button
        bg="gray.100"
        color="gray.700"
        variant="outline"
        borderColor="gray.400"
        size="lg"
        leftIcon={<SearchSvg height={20} width={20} />}
        onPress={() => {
          'função vazia!'
        }}
        _text={{
          color: 'gray.500',
        }}
      >
        Pesquise um produto...
      </Button>
    </View>
  )
}
