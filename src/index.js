const express = require('express'); // import

const app = express();

const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const pg = require('pg');

const pgPool = pg.Pool({
    database: 'koders',
    user: 'postgres',
    password: 'kodersadmin',
    port: 5432
});

const pgdb = require('./db/pgdb');

const PORT = process.env.PORT || 5050;

app.get('/hello', (rep, res) => { // loot endpoint
    res.send('Hello World');
});

const root = {
        hello: () => {
            return "world";
        },
        londonKoders: (args, context) => {
            //console.log(pgdb(context.pgPool).getKoder(args.id));
            return pgdb(context.pgPool)
            .getKoder(args.id)
            .then(res => ({...res, trips: pgdb(context.pgPool).getTrips(args.id)}));
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {
        pgPool 
    }
}));

app.listen(PORT, () => {
    console.log(`** Listening on ${PORT}`);
});