export const font = {
  family: {
    sans: 'ATCYara, "Helvetica Neue", Arial, sans',
  },
  size: {
    base: '1.1em',
  },
  weight: {
    regular: '400',
    medium: '500',
  },
}

export const colors = {
  grey: '#34556B',
  greyLight: '#adb5ba',
  greyLighter: '#dce0e3',
  blue: '#0982d3',
  blueDarkest: '#142933',
}

export const breakpoints = {
  s:    '@media screen and (min-width: 35em)',
  sMax: '@media screen and (max-width: 34.99em)',
  m:    '@media screen and (min-width: 48em)',
  mMax: '@media screen and (max-width: 47.99em)',
  l:    '@media screen and (min-width: 64em)',
  xl:   '@media screen and (min-width: 75em)',
  xxl:  '@media screen and (min-width: 90em)',
}

export const animations = {
  default: 'cubic-bezier(.4,0, .2,1)',
  spring: 'cubic-bezier(0.02, 0.145, 0.3, 1.4)',
}

export const layout = {
  maxWidth: '50rem',
  padding: '2rem',
}

export const zIndex = {
  zn: '-1',
  z0: '0',
  z1: '1',
  z2: '2',
  z3: '3',
  z4: '4',
  z5: '5',
}

const config = {
  font,
  colors,
  breakpoints,
  animations,
  layout,
  zIndex,
}

export default config
