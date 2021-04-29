const { generateSlug } = require("../lib/slug");

const resolvers = {
  Query: {
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      if (!slug) {
        const randomSlug = generateSlug;
        return models.Link.create({
          url,
          slug: randomSlug
        });
      } else {
        return models.Link.create({
          url,
          slug
        });
      }
    }
  }
};

module.exports = resolvers;
