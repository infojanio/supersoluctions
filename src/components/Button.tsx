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
      bg={variant === 'outline' ? 'transparent' : 'blue.700'}
      borderWidth={variant === 'outline' ? 1.5 : 0}
      borderColor="green.500"
      rounded="full"
      _pressed={{
        bg: variant === 'outline' ? 'green.300' : 'blue.500',
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
