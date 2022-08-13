import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Button = styled(Link)`
    margin-left: 5%;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85);
    width: 90%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
`;

const RoomPreview = ({ room }) => {
    const { contenido, imagen, titulo, slug } = room;

    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
                padding-bottom: 3rem;
                position: relative;
            `}
        >
            <GatsbyImage image={imagen.gatsbyImageData} alt={`Imagen ${titulo}`} />
            <div
                css={css`
                    padding: 3rem;
                    
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{titulo}</h3>
                <p>{contenido}</p>
                
            </div>
            <Button to={slug}>Ver Habitación</Button>
        </div>
    )
}

export default RoomPreview
