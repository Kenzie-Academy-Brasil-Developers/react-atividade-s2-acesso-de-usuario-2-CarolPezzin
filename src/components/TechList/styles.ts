import styled from "styled-components";

export const ContainerUl = styled.ul`
  background: #212529;
  border-radius: 4px;

  width: 60.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  
  padding: 0.5rem;
  margin-left: 19.5%;

  li {
    width: 96%;
    height: 3rem;
    background: #121214;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin-top: 1.5%;
    margin-bottom: 1.5%;

    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.21px;
      line-height: 22px;
      color: #ffffff;
      padding: 0;
      margin-left: 3%;
      
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 75%;
      padding: 0;
      margin-right: 5%;

      @media (max-width: 440px){
        gap: 40%;
      }

      h5 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        text-align: right;
        color: #868e96;
        padding: 0;
      }

      button {
        width: 2rem;
        height: 2rem;
        background: #121214;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
