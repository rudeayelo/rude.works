import { colors, font } from 'styles/config'

const styles = {
  social: {
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4em',
      height: 2,
      background: colors.grey,
    },
  },
  heading: {
    display: 'block',
    paddingTop: '1.5em',
    paddingBottom: '.55em',
    fontSize: '.8em',
    color: colors.greyLight,
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
    marginRight: '1em',
  },
  link: {
    fontSize: font.size.base,
    color: colors.blue
  },
}

export default styles
