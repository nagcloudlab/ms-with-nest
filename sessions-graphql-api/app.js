const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

const SessionAPI = require('./datasources/sessions')
const SpeakerAPI = require('./datasources/speakers')

const dataSources = () => {
    return {
        sessionAPI: new SessionAPI(),
        speakerAPI: new SpeakerAPI()
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources, //
});



server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
