const pg = require('pg');
// const client = new pg.Client({
// host: 'localhost',
// user: 'Group_CSI',
// port: 3000,
// password: 'password',
// database: 'Hotel_Chain'
// })
// try {
//     await client.connect();
//     const res = await client.query('SELECT * FROM artist;');
//     console.log(res.rows);
// } catch (err) {
//     console.error('Error executing query:', err);
// } finally {
//     await client.end();
// }

async function main() {
    const client = new pg.Client({
        host: 'localhost',
        user: 'Group_CSI',
        port: 5432,
        password: 'password',
        database: 'Hotel_Chain'
    });

    try {
        await client.connect();
        const res = await client.query('SELECT * FROM laboratories.artist;');
        console.log(res.rows);
    } catch (err) {
        console.error('Error executing query:', err);
    } finally {
        await client.end();
    }
}

main();

