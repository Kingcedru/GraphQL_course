import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server configuration
const server = new ApolloServer({

})

const {url} = await startStandaloneServer(server,{
    listen: {port: 4000},
})

console.log('Server ready at port', 4000)