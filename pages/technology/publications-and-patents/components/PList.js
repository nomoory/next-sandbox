import styled from "styled-components";
import { mediaQueriesBiggerThan } from "styles";
import PItem from "./PItem";
import { RED40, GRAY30, GRAY10 } from "styles/colors";
import Subtitle from "components/typography/Subtitle";

const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 40px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-top: 16px;
    padding-bottom: 80px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
`;

const PList = ({ dataArray = [], title }) => {
  return (
    <ComponentContainer>
      {title && (
        <Subtitle bold style={{ color: RED40 }}>
          {title}
        </Subtitle>
      )}
      <ListContainer>
        {dataArray.map(({ id, title, updatedAt, createdAt, link, content }) => (
          <PItem
            key={id}
            id={id}
            title={title}
            updatedAt={updatedAt}
            createdAt={createdAt}
            link={link}
            content={content}
          />
        ))}
      </ListContainer>
    </ComponentContainer>
  );
};

export default PList;
