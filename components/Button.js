import { Button } from "antd";
import styled from "styled-components";
import { RED40, RED70, GRAY80, GRAY90 } from "styles/colors";

const ButtonContainer = styled.div`
  button {
    border-radius: 2px;
    padding: 12px 24px;
    height: fit-content;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      color: white;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
    }
    &:hover {
      span {
        opacity: 80%;
      }
      path {
        opacity: 80%;
      }
    }
  }

  .ant-btn {
    //sub
    background-color: ${GRAY80};
    path {
      fill: white;
      color: white;
    }
    &:hover {
      background-color: ${GRAY90};
    }
    &.ant-btn-background-ghost {
      border: 1px solid ${GRAY80};
      span {
        color: ${GRAY80};
      }
      &:hover {
        border-color: ${GRAY90};
        background-color: #F7F7F7 !important;
        span {
          opacity: 100%;
          color: ${GRAY90};
        }
        path {
          opacity: 100%;
          fill: ${GRAY90};
          color: ${GRAY90};
        }
      }
    }
  }

  .ant-btn-primary {
    // primary
    background-color: ${RED40};
    path {
      fill: white;
      color: white;
    }
    &:hover {
      background-color: ${RED70};
    }
    &.ant-btn-background-ghost {
      border: 1px solid ${RED40};
      span {
        color: ${RED40};
      }
      &:hover {
        border-color: ${RED70};
        background-color: #FFF2F1 !important;
        span {
          opacity: 100%;
          color: ${RED70};
        }
        path {
          opacity: 100%;
          fill: ${RED70};
          color: ${RED70};
        }
      }
    }
  }
`;

export default (props) => (
  <ButtonContainer>
    <Button {...props} icon={props.icon}>
      {props.children}
    </Button>
  </ButtonContainer>
);
