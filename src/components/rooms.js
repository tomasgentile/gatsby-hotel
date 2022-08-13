import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import Layout from './layout';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsRoom (filter: {slug: {eq:$slug}}) {
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData
                }
            }
        }
    }
`;

const RoomTemplate = ({ data: { allDatoCmsRoom: { nodes } } }) => {
    const { titulo, contenido, imagen } = nodes[0];

    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt={`Img ${titulo}`} />
            </main>
        </Layout>
    )
}

export default RoomTemplate;
