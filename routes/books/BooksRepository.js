module.exports = {
  getBookList: () => {
    return `
        SELECT
            book_id,
            book_title,
            book_qty,
            book_price,
            book_desc,
            book_img
        FROM
        t_book;`;
  },
  getBook: () => {
    return `
    SELECT
      book_id,
      book_title,
      book_qty,
      book_price,
      book_desc,
      book_img
    FROM
      t_book
    WHERE
      book_id = ?;`;
  },
};
