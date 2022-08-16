import styled from "styled-components";

export const ContainerForm = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 30%;
  background: #212529 rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    background: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22.6vw;
    height: 63vh;
    gap: 1rem;

    

    div {
      width: 20vw;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9.62602px 16.0434px;
      gap: 8.02px;
      background: #343b41;
      border-radius: 3.20867px 3.20867px 0px 0px;

      h5 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
        color: #f8f9fa;
      }
      button {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 600;
        font-size: 12.8347px;
        line-height: 21px;
        color: #868e96;
        width: 8.82px;
        height: 20.86px;
        margin-top: 2rem;
        background: #343b41;
        border: none;
      }
    }
    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      width: 20vw;
      height: 3.5rem;

      padding: 1.3%;
      gap: 1.3rem;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;
      color: #f8f9fa;

      input {
        width: 20vw;
        height: 2rem;
        background: #343b41;
        border: 0.9772px solid #f8f9fa;
        border-radius: 3.20867px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        /* identical to box height, or 162% */

        /* grey-0 */

        color: #f8f9fa;
        
      }
      select {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 20vw;
        height: 2rem;
        background: #343b41;
        border: 0.9772px solid #f8f9fa;
        border-radius: 3.20867px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #f8f9fa;
      }
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      gap: 10.15px;

      width: 20vw;
      height: 2rem;
      margin-bottom: 2rem;

      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;
      color: #ffffff;
    }
  }

  @media (max-width: 440px){
    form{
      width: 52.6vw;
      div{
        width: 86%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
      }
      label{
        width: 86%;
      }
      input{
        width: 100%;
      }
      select{
        width: 100%;
      }
      button{width: 86%;}
    }
  }
`;
