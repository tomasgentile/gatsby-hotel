import { graphql, useStaticQuery } from "gatsby";

const useRooms = () => {
    const data = useStaticQuery(graphql`
    query {
        allDatoCmsRoom {
            nodes {
                titulo
                id
                slug
                contenido
                imagen {
                    gatsbyImageData
                }
            }
        }
    }
    `)
    const rooms = data.allDatoCmsRoom.nodes.map(room => ({
        titulo: room.titulo,
        id: room.id,
        contenido: room.contenido,
        imagen: room.imagen,
        slug: room.slug
    }));
    
    return rooms;
}

export default useRooms;