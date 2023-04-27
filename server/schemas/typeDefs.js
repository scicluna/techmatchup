const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID
    name: String
  }

  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    techs: [Tech]
    matchup(_id: ID!): Matchup
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new matchups
    createMatchup(tech1: String!, tech2: String!, tech1_votes: Int, tech2_votes: Int): Matchup
    createVote(_id: Int!, techNum: String!): Matchup
  }
`;

module.exports = typeDefs;
