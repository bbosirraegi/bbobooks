module.exports = {
  getCartList: () => {
    return `
    SELECT
      tc.cart_id,
      tc.book_id,
      tc.cart_qty,
      tb.book_title,
      tb.book_price,
      tb.book_img,
      tb.book_desc,
      tb.book_qty
    FROM
      t_cart_detail tc
      INNER JOIN t_book tb ON tc.book_id = tb.book_id
    WHERE
      tc.cart_id = ?;`;
  },
  addCart: () => {
    return `
    INSERT INTO t_cart_detail(
      cart_id,
      book_id,
      cart_qty
    ) VALUES(
      ?,
      ?,
      ?
    )`;
  },
};
