
const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
  
  type Library {
    branch: String!
    books: [Book!]
  } 
  type Book {
    title: String!
    author: Author!
  }
  type Author {
    name: String!
  }
  type Query {
    libraries: [Library]
    library_by_name(branch:String!):Library
  }

`

const libraries = [
    {
        branch: 'downtown'
    },
    {
        branch: 'riverside'
    },
];

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        branch: 'riverside'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        branch: 'downtown'
    },
];

const resolvers = {
    Query: {
        libraries: () => {
            return libraries
        },
        library_by_name: (parent, args) => {
            return libraries.find(lib => lib.branch === args.branch)
        }
    },
    Library: {
        books: (parent) => {
            return books.filter(book => book.branch === parent.branch);
        }
    },
    Book: {
        author: (parent) => {
            return {
                name: parent.author
            }
        }
    }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, });


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});