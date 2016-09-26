import { breakpoints, font } from 'styles/config'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '50vh',
    transform: 'translateY(-55%)',
    [breakpoints.s]: {
      flexDirection: 'row',
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
  },
  body: {
    [breakpoints.sMax]: {
      paddingTop: 2,
      paddingBottom: 2,
    },
  },
  intro: {
    display: 'inline',
    fontSize: font.size.base,
    fontWeight: font.weight.regular,
  },
  data: {
    display: 'inline',
    fontSize: font.size.base,
    fontWeight: font.weight.regular,
  },
}

export default styles
