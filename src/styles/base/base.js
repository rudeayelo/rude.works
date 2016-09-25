import jss from 'jss'
import { colors } from 'styles/config'

jss.createStyleSheet({
  body: {
    fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans',
    background: colors.blueDarkest,
  },
}, {
  named: false,
  meta: 'base',
}).attach()
