const Pagination = ({ currentPage, postsPerpage, totalPosta, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosta / postsPerpage); i++) {
    pageNumbers.push(i);
  }
  console.log({ pageNumbers });
  return (
    <nav className="pagination">
      {pageNumbers.map((number, i) => (
        <li className="page-item" key={`${i}-${number}`}>
          <button
            className={`page-link ${
              currentPage === number ? "active-page" : ""
            }`}
            onClick={() => paginate(number)}  //需要传值就必须写成箭头函数
          >
            {number}
          </button>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
