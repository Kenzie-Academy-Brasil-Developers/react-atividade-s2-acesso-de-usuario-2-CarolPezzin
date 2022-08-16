import styled from "styled-components";

export const Containerdash = styled.div`
  width: 100vw;
  height: 100vh;
  background: #121214;
  /* display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column; */

  header {
    width: 61.5%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 19.5%;

    button {
      width: 3.468rem;
      background: #212529;
      border-radius: 4px;
      border: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      color: #f8f9fa;
      cursor: pointer;
    }
  }

  div {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 53%;
    border: solid 1px #212529;

    @media (max-width: 440px) {
      flex-direction: column;
      gap: 2%;
      align-items: flex-start;

      h3 {
        margin-bottom: 1%;
        margin-left: 18%;
      }
      p {
        margin-top: 1%;
        margin-left: 18%;
      }
    }

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: #868e96;
    }
  }

  section {
    width: 61.5%;
    margin-left: 19.5%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }
    button {
      color: #ffffff;
      border: none;
      background: #212529;
      border-radius: 4px;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;
