/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from "react";
import { ContainerStyle } from "./style";
import background from "../../assets/background-login.png";

const LoginPage = () => {
    return <div css={ContainerStyle(background)}>Login Page</div> 
}

export default LoginPage;