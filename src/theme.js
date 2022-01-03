import {theme, extendTheme} from '@chakra-ui/react'

export default extendTheme({
  ...theme,
  colors: {
    ...theme.colors,
    primaryBlue: '#19195f',
  },
})
