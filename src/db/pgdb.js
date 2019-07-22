const humps = require('humps');

const pgdb = (pgPool) => {
    return {
            getKoder: (id) => {
                return pgPool.query(`
                SELECT * FROM koders where id = $1
                `, [id]).then(res => humps.camelizeKeys(res.rows[0]));
            },
            getTrips: (id) => {
                return pgPool.query(`
                SELECT * FROM trips where visited_by = $1
                `, [id]).then(res => humps.camelizeKeys(res.rows));
            }

    }
};

module.exports = pgdb;