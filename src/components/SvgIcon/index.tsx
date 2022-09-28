import React from 'react'
import { SvgIconBase, SvgIconBaseProps } from './style'

type Props = SvgIconBaseProps & {
  src: string
}

function SvgIcon(props: Props) {
  return <SvgIconBase {...props} />
}

export default SvgIcon
