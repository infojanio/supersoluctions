import { Input as NativeBaseInput, IInputProps } from 'native-base' //renomeia o Input para não dar conflito as NativeBaseInput

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.300"
      h={12}
      px={4}
      borderWidth={1}
      fontSize="md"
      color="black"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.100"
      _focus={{
        bg: 'blueGray.100',
        borderWidth: 1,
        borderColor: 'gray.100',
      }}
      {...rest}
    />
  )
}
