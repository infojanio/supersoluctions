import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      mb="2"
      bg={variant === 'outline' ? 'transparent' : 'green.600'}
      borderWidth={variant === 'outline' ? 1.5 : 0}
      borderColor="green.500"
      rounded="full"
      _pressed={{
        bg: variant === 'outline' ? 'green.300' : 'green.500',
      }}
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'green.900' : 'white'}
        fontFamily="heading"
        fontSize="md"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
