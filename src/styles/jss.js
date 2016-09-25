import jss from 'jss'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import vendorPrefixer from 'jss-vendor-prefixer'

jss.use(
  nested(),
  camelCase(),
  defaultUnit({
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
  }),
  vendorPrefixer()
)
