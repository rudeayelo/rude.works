import { jss } from 'styles/jss'
import LightWoff from 'styles/fonts/SourceSansPro-Light.woff'
import LightWoff2 from 'styles/fonts/SourceSansPro-Light.woff'
import RegularWoff from 'styles/fonts/SourceSansPro-Regular.woff'
import RegularWoff2 from 'styles/fonts/SourceSansPro-Regular.woff'
import SemiboldWoff from 'styles/fonts/SourceSansPro-Semibold.woff'
import SemiboldWoff2 from 'styles/fonts/SourceSansPro-Semibold.woff'

jss.createStyleSheet({
  '@font-face': [
    {
      fontFamily: 'Source Sans Pro',
      src: [
        `url(${LightWoff}) format('woff')`,
        `url(${LightWoff2}) format('woff2')`,
      ],
      fontWeight: 300,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: [
        `url(${RegularWoff}) format('woff')`,
        `url(${RegularWoff2}) format('woff2')`,
      ],
      fontWeight: 400,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: [
        `url(${SemiboldWoff}) format('woff')`,
        `url(${SemiboldWoff2}) format('woff2')`,
      ],
      fontWeight: 500,
      fontStyle: 'normal',
    }
  ],
}, {
  named: false,
  meta: 'font-face',
}).attach()
