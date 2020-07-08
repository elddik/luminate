import {gql} from 'apollo-server-express'
import {Resolvers} from '../types'

const typeDefs = gql`
  type CuppingSession @key(fields: "id") {
    id: ID!
    internalId: ID
    description: String
    locked: Boolean
    sessionCoffees: [SessionCoffee]
    createdAt: String!
    updatedAt: String!
  }

  type SessionCoffee {
    id: ID!
    sampleNumber: ID!
    coffee: Coffee!
    averageScore: Float
    scoreSheets: [ScoreSheet]
  }

  extend type Coffee @key(fields: "id") {
    id: ID! @external
  }

  type CuppingSessionConnection {
    pageInfo: PageInfo!
    edges: [CuppingSessionEdge!]!
  }

  type CuppingSessionEdge {
    cursor: String!
    node: CuppingSession!
  }

  input CreateCuppingSessionInput {
    internalId: ID
    description: String
  }

  input UpdateCuppingSessionInput {
    internalId: ID
    description: String
  }

  input SessionCoffeeInput {
    sampleNumber: ID!
    coffee: ID!
  }

  extend type Query {
    listCuppingSessions(cursor: String, limit: Int, query: [QueryInput!]): CuppingSessionConnection!
    getCuppingSession(id: ID!): CuppingSession
    getCuppingSessionCoffee(id: ID!): SessionCoffee
  }

  extend type Mutation {
    createCuppingSession(input: CreateCuppingSessionInput!): CuppingSession
    updateCuppingSession(id: ID!, input: UpdateCuppingSessionInput!): CuppingSession
    deleteCuppingSession(id: ID!): CuppingSession
    updateCuppingSessionCoffees(id: ID!, sessionCoffees: [SessionCoffeeInput!]!): CuppingSession
    lockCuppingSession(id: ID!): CuppingSession
  }
`

const resolvers: Resolvers = {
  Query: {
    listCuppingSessions: async (parent, args, {services}) => {
      return services.cuppingSession.getConnectionResults(args)
    },
    getCuppingSession: async (parent, {id}, {services}) => {
      return services.cuppingSession.getById(id)
    },
    getCuppingSessionCoffee: async (parent, {id}, {services}) => {
      return services.cuppingSession.getCuppingSessionCoffee(id)
    },
  },
  Mutation: {
    createCuppingSession: async (parent, {input}, {services}) => {
      console.log({input})
      return services.cuppingSession.create(input)
    },
    updateCuppingSession: async (parent, {id, input}, {services}) => {
      return services.cuppingSession.updateById(id, input)
    },
    deleteCuppingSession: async (parent, {id}, {services}) => {
      return services.cuppingSession.deleteById(id)
    },
    updateCuppingSessionCoffees: async (parent, {id, sessionCoffees}, {services}) => {
      return services.cuppingSession.updateCuppingSessionCoffees(id, sessionCoffees)
    },
    lockCuppingSession: async (parent, {id}, {services}) => {
      return services.cuppingSession.lock(id)
    },
  },
  SessionCoffee: {
    averageScore: parent => {
      const totalScore = parent.scoreSheets.reduce((acc, cur) => {
        const {
          fragranceAroma,
          flavor,
          aftertaste,
          acidity,
          body,
          uniformity,
          cleanCup,
          balance,
          sweetness,
          overall,
          taints,
          defects,
        } = cur
        const totalScore =
          fragranceAroma + flavor + aftertaste + acidity + body + uniformity + cleanCup + balance + sweetness + overall
        const totalDefects =
          taints.numberOfCups || 0 * taints.intensity || 0 + defects.numberOfCups || 0 * defects.intensity || 0
        return acc + (totalScore - totalDefects)
      }, 0)
      return totalScore / parent.scoreSheets.length
    },
    coffee: parent => {
      return {__typename: 'Coffee', id: parent.coffee}
    },
  },
}

export interface CuppingSessionLoaders {
  // cuppingSessions: LoaderFn<CuppingSessionDocument>
}

export const loaders: CuppingSessionLoaders = {
  // cuppingSessions: async (ids, models, user) => {
  //   const {CuppingSession} = models
  //   const cuppingSessions = await CuppingSession.findByUser(user, {_id: ids})
  //   return ids.map(id => {
  //     const cuppingSession = cuppingSessions.find(cuppingSession => cuppingSession._id.toString() === id.toString())
  //     if (!cuppingSession) return null
  //     return cuppingSession
  //   })
  // },
}

export const schema = {typeDefs, resolvers}
