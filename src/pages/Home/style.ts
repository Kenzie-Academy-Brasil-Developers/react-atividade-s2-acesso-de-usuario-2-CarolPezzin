import styled from "styled-components"

export const ContainerApp = styled.div`
    text-align: center;
    background-color: #000000;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    font-size: calc(10px + 2vmin);
    color: white;

    form{
    margin-top: 0%;
    margin-bottom: -10%;
    width: 21rem;
    height: 28rem;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: calc(10px + 2vmin);
    color: white;

    h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #F8F9FA;
    margin-top: -20%;
    margin-bottom: 0%;
  }

  label{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 84%;
    padding: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #F8F9FA;

    input{
    background: #343B41;
    border: 1.2182px solid #343B41;
    border-radius: 4px;
    width: 15.5rem;
    height: 1rem;
    margin-bottom: 3%;
    margin-top: 6%;
    padding: 1rem;
  }
    input::placeholder{
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868E96;
    
  }
    

  }
  button{
    width: 18rem;
    height: 3rem;
    background: #FF577F;
    border: 1.2182px solid #FF577F;
    border-radius: 4.06066px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    cursor: pointer;
    }
  }
  section{
  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868E96;
    margin-top: 0%;
    
  }
  
  button{
    width: 18rem;
    height: 3rem;
    background: #868E96;
    border: 1.2182px solid #868E96;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #F8F9FA;
    cursor: pointer;
  }
}   
`


  // @media (max-width: 440px){
  //   .App{
  //     padding: 5%;
  //   }
  //   .Formlogin{
  //     width: 90%;
      
  //   }
  //   .Labellogin{
  //     width: 96%;
  //     margin-left: 10%;
  //   }
  //   .Inputlogin{
  //     width: 78%;
  //   }
  //   .Btnlogin{
  //     width: 85%;
  //   }
  //   .Containerlogin{
  //     width: 90%;
  //   }
  //   .Btnlogincadastro{
  //     width: 100%;
  //   }
  // }
  
  