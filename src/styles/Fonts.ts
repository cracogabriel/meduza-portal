import { css } from 'styled-components'
import {
  DMSerifDisplayItalic,
  DMSerifDisplayRegular,
  GraphikBold,
  GraphikMedium,
  GraphikRegular,
  SackersGothicStdHeavy,
  SackersGothicStdLight,
  SackersGothicStdMedium,
} from '../assets/fonts'

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

  @font-face {
    font-family: 'DMSerifDisplay';
    font-weight: normal;
    font-style: normal;
    src: url('${DMSerifDisplayRegular}');
  }
  @font-face {
    font-family: 'DMSerifDisplay';
    font-weight: normal;
    font-style: italic;
    src: url('${DMSerifDisplayItalic}');
  }

  @font-face {
    font-family: 'SackersGothicStd';
    font-weight: 100;
    font-style: normal;
    src: url('${SackersGothicStdLight}');
  }
  @font-face {
    font-family: 'SackersGothicStd';
    font-weight: normal;
    font-style: normal;
    src: url('${SackersGothicStdMedium}');
  }
  @font-face {
    font-family: 'SackersGothicStd';
    font-weight: 700;
    font-style: normal;
    src: url('${SackersGothicStdHeavy}');
  }

  @font-face {
    font-family: 'Graphik';
    font-weight: normal;
    font-style: normal;
    src: url('${GraphikRegular}');
  }
  @font-face {
    font-family: 'Graphik';
    font-weight: 600;
    font-style: normal;
    src: url('${GraphikMedium}');
  }
  @font-face {
    font-family: 'Graphik';
    font-weight: 700;
    font-style: normal;
    src: url('${GraphikBold}');
  }
`
