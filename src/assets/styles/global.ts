"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font}; 
    }

    body {
        font-size: 18px;
        color: #000;
        background: #fff;
        span {
            font-size: 10px;
        }
    }

    button {
        cursor: pointer;
    }
`;
