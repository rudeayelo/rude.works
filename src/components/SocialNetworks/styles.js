import { colors, font } from 'styles/config'

const styles = {
  social: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 4,
      height: '2px',
      background: colors.greyLighter,
    },
  },
  heading: {
    display: 'block',
    paddingTop: 1.5,
    paddingBottom: 0.55,
    fontSize: 0.8,
    color: colors.blueDarkest,
    textTransform: 'uppercase',
    fontWeight: font.weight.semibold,
  },
  list: {
    display: 'flex',
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  item: {
    display: 'inline-block',
    marginRight: 1,
  },
  link: {
    fontSize: font.size.base,
  },
}

export default styles
