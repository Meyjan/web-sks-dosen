import {css} from '@emotion/react'

export const ContainerStyle = (url) => css`
    background-image: url(${url});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
`