const { buildSchema } = require('graphql');

// const lkSchema = buildSchema(`
//  type Query {
//      hello: String
//  }
// `);

const lkSchema = buildSchema(`
type Query {
    hello: String,
    londonKoders(id : Int): Koder 
}

type Koder {
    firstName : String,
    lastName : String,
    company: String,
    trips: [Trip!]
    }

type Trip {
    city: String
    country: String
}
`);

module.exports = lkSchema;