import { create as createJss } from 'jss'
import { create as createInjectSheet  } from 'react-jss'
import preset from 'jss-preset-default'

export const jss = createJss()
jss.setup(preset({
  defaultUnit: {
    'font-size': 'em',
    'padding': 'em',
    'padding-right': 'em',
    'padding-left': 'em',
    'padding-top': 'em',
    'padding-bottom': 'em',
    'margin': 'em',
    'margin-right': 'em',
    'margin-left': 'em',
    'margin-top': 'em',
    'margin-bottom': 'em',
    'width': 'em',
    'height': 'em',
    'max-width': '%',
  },
}))

const injectSheet = createInjectSheet(jss)

export default injectSheet
