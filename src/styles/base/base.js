import { jss } from 'styles/jss'
import { colors, font } from 'styles/config'

jss.createStyleSheet({
  body: {
    fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans',
    background: 'white',
    color: colors.blueDarkest,
    lineHeight: 1.5,
  },
  'a:link, a:visited, a:hover, a:focus, a:active': {
    color: colors.blue,
  },
  strong: {
    fontWeight: font.weight.semibold,
  },
}, {
  named: false,
  meta: 'base',
}).attach()
