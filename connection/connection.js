import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mariadb12345',
    port: 8081,
    database: 'tempahan_dewan_mariadb',
    connectionLimit: 10,
    acquireTimeout: 30000
})

const getConnection = async () =>{
    let conn;
    try {
        conn = await pool.getConnection();
        console.log('Connected to database');
        return conn;
    }catch(e){
        console.log('Connection error');
        console.log(e);
    }
}

getConnection();

export default getConnection;