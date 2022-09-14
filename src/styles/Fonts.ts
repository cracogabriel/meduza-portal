import { css } from 'styled-components'

const YuseiMagic400 = css`
  @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
`

const Ubuntu400 = css`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
`

const Ubuntu700 = css`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap');
`

export const MainFontFace = css`
  @font-face {
    font-family: 'YuseiMagic';
    font-weight: 400;
    font-style: normal;
    src: url('${YuseiMagic400}');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 400;
    font-style: normal;
    src: url('${Ubuntu400}');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 700;
    font-style: normal;
    src: url('${Ubuntu700}');
  }
`
