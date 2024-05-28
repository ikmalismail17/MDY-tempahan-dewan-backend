import getConnection from "../connection/connection.js";

const dewanDisplay = async (req, res) => { 
    let conn;
    try {
        conn = await getConnection();
        const rows = await conn.query(
            `SELECT 
                dewan.dewan_id,
                dewan.dewan_name,
                dewan.dewan_desc,
                dewan.dewan_location,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'order_id', dewan_order.order_id,
                        'order_desc', dewan_order.order_desc,
                        'order_explain', dewan_order.order_explain,
                        'order_date', DATE_FORMAT(dewan_order.order_date, '%Y-%m-%d'),
                        'dewan_order_date', DATE_FORMAT(dewan_order.dewan_order_date, '%Y-%m-%d'),
                        'order_status', dewan_order.order_status
                    )
                ) AS orders
            FROM dewan
            JOIN dewan_order ON dewan.dewan_id = dewan_order.order_dewan_id
            GROUP BY dewan.dewan_id;`
        );
        res.json(rows);
    } catch (e) {
        console.error(e);
        res.status(500).send('Server Error');
    } finally {
        if (conn) conn.release();
    }
}

export default dewanDisplay;