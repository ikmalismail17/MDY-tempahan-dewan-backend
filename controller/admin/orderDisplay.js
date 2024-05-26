import getConnection from "../../connection/connection.js";

const orderDisplay = async (req, res) => {
    let conn;

    try{
        conn = await getConnection();
        const rows = await conn.query(
            `SELECT 
                dewan_order.order_id,
                dewan_order.order_desc,
                DATE_FORMAT(dewan_order.order_date, '%Y-%m-%d') AS order_date,
                DATE_FORMAT(dewan_order.dewan_order_date, '%Y-%m-%d') AS dewan_order_date,
                dewan_order.order_status,
                JSON_OBJECT(
                    'user_id', users.user_id, 
                    'user_name', users.user_name, 
                    'user_email', users.user_email,
                    'user_phone', users.user_phone
                ) AS user,
                JSON_OBJECT(
                    'dewan_id', dewan.dewan_id, 
                    'dewan_name', dewan.dewan_name,
                    'dewan_desc', dewan.dewan_desc,
                    'dewan_location', dewan.dewan_location
                ) AS dewan 
             FROM dewan_order
             JOIN users ON dewan_order.order_user_id = users.user_id
             JOIN dewan ON dewan_order.order_dewan_id = dewan.dewan_id`
        );
        // const rows = await conn.query("SELECT * FROM dewan_order");
        res.json(rows);

    }catch(e){
        throw e;
    }finally{
        if(conn) conn.release();
    }
}

export default orderDisplay;