const { gql } = require('apollo-server');


const typeDefs = gql`

    type Speaker{
        id:ID!
        bio: String
        name: String,
        sessions: [Session]
    }

    type Session {
        id: ID!
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String,
        favorite: Boolean
        speakers: [Speaker]
    }

    type Query{
        ping:String
        sessions(
            title: String
            description: String
            startsAt: String
            endsAt: String
            room: String
            day: String
            format: String
            track: String
            level: String
        ): [Session]
        sessionById(id:ID!):Session
        speakers:[Speaker]
        speakerById(id:ID!):Speaker
    }

    input SessionInput{
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String,
        favorite: Boolean
      }
        
    type Mutation{
        toggleFavoriteSession(id:ID!):Session
        deleteSession(id:ID!):Boolean 
        addNewSession(session:SessionInput!):Session
    }

`

module.exports = typeDefs
