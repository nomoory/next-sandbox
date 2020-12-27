import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { mediaQueriesBiggerThan } from "styles";
import NewsItem from "./NewsItem";
import { Pagination } from "antd";
import { DATA_COUNT_IN_A_PAGE } from "stores/NewsStore";
import { RED40, GRAY30, GRAY10 } from "styles/colors";

const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-top: 16px;
    padding-bottom: 80px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
`;
const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  border: none;
  .ant-pagination-item {
    border: none;
    a {
      color: ${GRAY30};
    }
  }
  .ant-pagination-item-link {
    border: none;
    background: ${GRAY10};
  }
  .ant-pagination-item-active {
    background-color: ${RED40};
    border: none;
    a {
      color: white;
    }
  }
  .ant-pagination {
    &-next {
      margin: 0px 16px;
    }
    &-prev {
      margin: 0px 24px;
    }
  }
`;

const NewsList = ({ newsStore }) => {
  useEffect(() => {
    newsStore.loadAll();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const { dataArray } = newsStore;
  return (
    <ComponentContainer>
      <ListContainer>
        {dataArray
          .slice(
            (currentPage - 1) * DATA_COUNT_IN_A_PAGE,
            currentPage * DATA_COUNT_IN_A_PAGE
          )
          .map(({ id, title, media, updatedAt, createdAt, link, content }) => (
            <NewsItem
              key={id}
              id={id}
              title={title}
              media={media}
              updatedAt={updatedAt}
              createdAt={createdAt}
              link={link}
              content={content}
            />
          ))}
      </ListContainer>
      <PaginationContainer>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={DATA_COUNT_IN_A_PAGE}
          current={currentPage}
          total={dataArray.length}
          pageSize={DATA_COUNT_IN_A_PAGE}
          onChange={pageNumber => {
            setCurrentPage(pageNumber);
          }}
        />
      </PaginationContainer>
    </ComponentContainer>
  );
};

export default inject("newsStore")(observer(NewsList));
