import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navigation from './nav';

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Footer = ({ title }) => {
    const year = new Date().getFullYear();

    return (
        <footer
            css={css`
            background-color: rgba(44, 62, 80);
            padding: 1rem;
            margin-top: 5rem;
        `}
        >
            <div
                css={css`
                max-width: 1200px;
                margin: 0 auto;

                @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                `}
            >
                <HomeLink to='/'>
                    <h1>Hotel Gatsby</h1>
                </HomeLink>
                <Navigation />

            </div>
            <p
                css={css`
                        color: #fff;
                        text-align: center;
                        margin: 0;
                        padding: 1rem;
                    `}
            >{title}. Todos los derechos reservados {year} &copy;</p>
        </footer>
    )
}

export default Footer;