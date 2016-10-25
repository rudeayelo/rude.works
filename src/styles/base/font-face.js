import { injectGlobal } from 'styled-components'
import RegularWoff from 'styles/fonts/ATCYara-Regular.woff'
import RegularWoff2 from 'styles/fonts/ATCYara-Regular.woff2'
import MediumWoff from 'styles/fonts/ATCYara-Medium.woff'
import MediumWoff2 from 'styles/fonts/ATCYara-Medium.woff2'
import BoldWoff from 'styles/fonts/ATCYara-Bold.woff'
import BoldWoff2 from 'styles/fonts/ATCYara-Bold.woff2'

const FontFaceName = 'ATCYara'
const FontFaceDefs = [
  {
    style: 'normal',
    weight: 400,
    woff: RegularWoff,
    woff2: RegularWoff2,
  },
  {
    style: 'normal',
    weight: 500,
    woff: MediumWoff,
    woff2: MediumWoff2,
  },
  {
    style: 'normal',
    weight: 600,
    woff: BoldWoff,
    woff2: BoldWoff2,
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

injectGlobal` ${ defineFontFace(FontFaceDefs) } `
