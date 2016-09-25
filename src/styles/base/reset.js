import { jss } from 'styles/jss'

jss.createStyleSheet({
  '*, *::after, *::before': {
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
  },
  img: {
    maxWidth: 100,
    height: 'auto',
  },
  'audio, canvas, img, svg, video': {
    verticalAlign: 'middle',
  },
}, {
  named: false,
  meta: 'reset',
}).attach()
