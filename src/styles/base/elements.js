import { injectGlobal } from 'styled-components'
import { colors, font } from 'styles/config'

injectGlobal`
  body {
    font-family: ${font.family.sans};
    background: white;
    color: ${colors.blueDarkest};
    line-height: 1.5;
  }

  a:link, a:visited, a:hover, a:focus, a:active {
    color: ${colors.blue};
    text-decoration: none;
  }

  strong {
    font-weight: ${font.weight.medium};
  }

  img {
    max-width: 100;
    height: auto;
  }
`
