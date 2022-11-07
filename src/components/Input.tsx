import { Input as NativeBaseInput, IInputProps } from 'native-base' //renomeia o Input para não dar conflito as NativeBaseInput

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.400"
      h={12}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="black"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'blueGray.200',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  )
}
