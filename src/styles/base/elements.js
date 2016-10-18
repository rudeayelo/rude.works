import { injectGlobal } from 'styled-components'
import { colors, font } from 'styles/config'

injectGlobal`
  body {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans;
    background: white;
    color: ${colors.blueDarkest};
    line-height: 1.5;
  }

  a:link, a:visited, a:hover, a:focus, a:active {
    color: ${colors.blue};
  }

  strong {
    font-weight: ${font.weight.semibold};
  }

  img {
    max-width: 100;
    height: auto;
  }
`
