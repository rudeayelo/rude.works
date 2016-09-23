import prefix from 'inline-style-prefixer/static'
import { colors, breakpoints, font } from 'styles/config'

const styles = prefix({
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '50vh',
    transform: 'translateY(-55%)',
    [breakpoints.m]: {
      flexDirection: 'row',
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  body: {
    [breakpoints.mMax]: {
      paddingTop: '2em',
      paddingBottom: '2em',
    },
  },
  intro: {
    display: 'inline',
    fontSize: font.size.base,
    fontWeight: font.weight.regular,
    color: colors.greyLight,
  },
  data: {
    display: 'inline',
    fontSize: font.size.base,
    fontWeight: font.weight.regular,
    color: colors.greyLight,
  },
})

export default styles
