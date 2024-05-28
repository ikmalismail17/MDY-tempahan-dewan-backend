import getConnection from "../../connection/connection.js";

const dewanAdmin = async (req, res) => {
    let conn;

    try{
        conn = await getConnection();
        const rows = await conn.query("SELECT * FROM dewan");
        res.json(rows);
    }catch(e){
        throw e;
    }finally{
        if(conn) conn.release();
    }
};

export default dewanAdmin;