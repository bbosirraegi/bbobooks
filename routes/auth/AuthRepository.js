module.exports = {
  login: () => {
    return `
        SELECT
            user_id,
            user_pw,
            user_nm,
            user_grade
        FROM
            t_user
        WHERE
            user_id = ?
        AND
            user_pw = ?;`;
  },
  join: () => {
    return `
        INSERT INTO t_user(
            user_id,
            user_pw,
            user_nm,
            user_grade
        )
        VALUES(
            ?,
            ?,
            ?,
            ?
        )`;
  },
  addCart: () => {
    return `
        INSERT INTO t_cart(user_id, cart_id) VALUES(?, ?);`;
  },
};
