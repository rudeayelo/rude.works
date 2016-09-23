import prefix from 'inline-style-prefixer/static'
import { wrap } from 'styles/config'

const styles = prefix({
  base: {
    display: 'flex',
    paddingLeft: '2em',
    paddingRight: '2em',
    maxWidth: wrap.maxWidth,
  },
  center: {
    margin: '0 auto',
  },
})

export default styles
