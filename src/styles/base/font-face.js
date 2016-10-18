import { injectGlobal } from 'styled-components'
import LightWoff from 'styles/fonts/SourceSansPro-Light.woff'
import LightWoff2 from 'styles/fonts/SourceSansPro-Light.woff2'
import RegularWoff from 'styles/fonts/SourceSansPro-Regular.woff'
import RegularWoff2 from 'styles/fonts/SourceSansPro-Regular.woff2'
import SemiboldWoff from 'styles/fonts/SourceSansPro-Semibold.woff'
import SemiboldWoff2 from 'styles/fonts/SourceSansPro-Semibold.woff2'

const FontFaceName = 'Source Sans Pro'
const FontFaceDefs = [
  {
    style: 'normal',
    weight: 300,
    woff: LightWoff,
    woff2: LightWoff2,
  },
  {
    style: 'normal',
    weight: 400,
    woff: RegularWoff,
    woff2: RegularWoff2,
  },
  {
    style: 'normal',
    weight: 500,
    woff: SemiboldWoff,
    woff2: SemiboldWoff2,
  },
]

const defineFontFace = (FontFaceDefs) => (
  FontFaceDefs.map((FontFaceDef) => (`
    @font-face {
      font-family: ${FontFaceName};
      src:  url(${FontFaceDef.woff2}) format('woff2'),
            url(${FontFaceDef.woff}) format('woff');
      font-weight: ${FontFaceDef.weight};
      font-style: ${FontFaceDef.style};
    }
  `))
)

injectGlobal`${ defineFontFace(FontFaceDefs) }`
