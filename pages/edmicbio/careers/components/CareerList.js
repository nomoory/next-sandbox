import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { mediaQueriesBiggerThan } from "styles";
import CareerItem from "./CareerItem";
import Body from "components/typography/Body";
import { DATA_COUNT_IN_A_PAGE } from "stores/CareerStore";
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
const TitleContainer = styled.div`
  width: 100%;
  
`

const CareerList = ({ careerStore }) => {
  useEffect(() => {
    careerStore.loadAll();
  }, []);
  const { dataArray } = careerStore;
  return (
    <ComponentContainer>
      <TitleContainer>
        <Body bold>Currnet Job Opening</Body>
      </TitleContainer>
      <ListContainer>
        {dataArray
          .map(({ id, title, content, updatedAt, createdAt }) => (
            <CareerItem
              key={id}
              id={id}
              title={title}
              content={content}
              updatedAt={updatedAt}
              createdAt={createdAt}
            />
          ))}
      </ListContainer>
    </ComponentContainer>
  );
};

export default inject("careerStore")(observer(CareerList));
