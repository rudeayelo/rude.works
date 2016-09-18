import prefix from 'inline-style-prefixer/static'
import { breakpoints } from 'styles/config'

const styles = prefix({
  filter: 'drop-shadow(0 2.5em 4em rgba(0,0,0,.4))',
  [breakpoints.s]: {
    paddingRight: '3em',
  },
})

export default styles
