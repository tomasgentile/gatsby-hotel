exports.createPages = async ({ actions, graphql, reporter }) => {
  const query = await graphql(`
    query {
      allDatoCmsRoom {
      nodes {
        slug
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panic('No hubo resultados', query.errors);
  }

  const rooms = query.data.allDatoCmsRoom.nodes;
  
  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve('./src/components/rooms.js'),
      context: { slug: room.slug },
    })
  });
}
