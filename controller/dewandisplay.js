import getConnection from "../connection/connection.js";

const dewandisplay = async (req, res) => {
    let conn;
    try {
        conn = await getConnection();
        const rows = await conn.query("SELECT * FROM dewan");
        res.json(rows);
    } catch (e) {
        console.error(e);
        res.status(500).send('Server Error');
    } finally {
        if (conn) conn.release();
    }
}

export default dewandisplay;