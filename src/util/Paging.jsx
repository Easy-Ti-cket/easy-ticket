import Pagination from "react-js-pagination";
import styled from "styled-components";

const PaginationStyle = styled.div`
  /*페이지네이션 컨테이너 */
  .pagination-container {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
  }
  /*페이지네이션 각 항목*/
  .pagination-item {
    margin: 0 5px;
    cursor: pointer;
  }
  /*숫자,이전,다음 버튼*/
  .pagination-link {
    color: var(--text-color);
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 3px;
    &:hover {
      color: var(--key-color);
    }
  }
  .pagination-active .pagination-link {
    background-color: var(--progress-color);
    color: #fff;
  }
  .pagination-disabled .pagination-link {
    color: var(--fill-color);
    pointer-events: none;
    cursor: default;
  }
`;

const Paging = ({
  activePage,
  totalItemsCount,
  handlePageChange,
  itemsCountPerPage,
  pageRangeDisplayed
}) => {
  return (
    <PaginationStyle>
      <Pagination
        activePage={activePage} //현재페이지
        itemsCountPerPage={itemsCountPerPage} //한 페이지당 보여줄 아이템 개수
        totalItemsCount={totalItemsCount} // 총 아이템 개수
        pageRangeDisplayed={pageRangeDisplayed} //paginator 페이지 범위
        prevPageText={"<"} // 이전을 나타낼 텍스트
        nextPageText={">"} // 이후를 나타낼 텍스트
        onChange={handlePageChange} //페이지 변경 핸들링
        //   //css 설정을 위한 className
        itemClass={"pagination-item"}
        linkClass={"pagination-link"}
        activeClass={"pagination-active"}
        disabledClass={"pagination-disabled"}
        innerClass={"pagination-container"}
      />
    </PaginationStyle>
  );
};

export default Paging;
