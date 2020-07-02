import {GraphQLServer} from "graphql-yoga"; 
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers //resolvers:resolvers 와 같은 것임 최신문법에서는 resolvers만 써도 됨.

});

server.start(() => console.log("Graphql Server Running"));