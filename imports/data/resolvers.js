import { Producers } from '/imports/data/producers-connector';

const resolvers = {
  Query: {
    async data(root) {
      return Producers.getAll();
    }
  }
};

export default resolvers;

// import { Youtube } from '/imports/data/youtube-connector';

// const resolvers = {
//   Query: {
//     async data(root, { keywords }) {
//       return Youtube.search(keywords);
//     }
//   }
// };

// export default resolvers;

