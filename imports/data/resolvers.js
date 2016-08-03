import { Producers } from '/imports/data/producers-connector';

const resolvers = {
  Query: {
    async data(root) {
      return Producers.getAll();
    }
  }
};

export default resolvers;