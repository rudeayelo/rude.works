import { PropTypes } from 'react'
import styled from 'styled-components'
import { wrap } from 'styles/config'


const Wrap = styled.div`
  ${ props => props.center && 'margin: 0 auto' };
  display: flex;
  padding-left: 2em;
  padding-right: 2em;
  max-width: ${wrap.maxWidth};
`

export const WrapCenter = styled(Wrap)`
  margin: 0 auto;
`

Wrap.propTypes = {
  center: PropTypes.bool,
}

export default Wrap
