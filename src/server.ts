import { createServer } from "@graphql-yoga/node";

export const server = () => {
  const yogaServer = createServer({
    schema: {
      typeDefs: /* GraphQL */ `
        type Query {
          hello: String
        }
      `,
      resolvers: {
        Query: {
          hello: () => "Hello from Yoga!",
        },
      },
    },
  });

  return yogaServer.start();
};
