import pg from 'pg';
const {Pool} = pg;

const pool = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'sistema_bancario'
});

export default pool;