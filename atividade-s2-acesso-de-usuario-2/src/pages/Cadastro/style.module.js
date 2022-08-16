import styled from "styled-components"

export const Container = styled.div`
    background-color: #000000;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    div {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    width: 21rem;

    button{
    background: #212529;
    border-radius: 4px;
    width: 24%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: #F8F9FA;
    cursor: pointer
    }
    }
    `
export const Form = styled.form`
    width: 21rem;
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
    
    div{
    display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: space-between;
     width: 100%;
     
     h3{        
         font-family: 'Inter';
         font-style: normal;
        font-weight: 700;
         font-size: 18px;
         line-height: 28px;
         color: #F8F9FA;
         margin-top: 10%;
         margin-bottom: 3%;
     }
     p{
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 12px;
         line-height: 22px;color: #868E96;
         margin-top: 0%;
    }
}

    label{
    width: 80%;
    padding: 1%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
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
    width: 82.5%;
    height: 1rem;
    margin-bottom: 3%;
    margin-top: 6%;
    padding: 1rem;

    input::placeholder{
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868E96;    
    }
    }

    select{
    background: #343B41;
    border: 1.2182px solid #343B41;
    border-radius: 4px;
    width: 98%;
    height: 3rem;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    
    font-weight: 400;
    font-size: 14.2426px;
    line-height: 26px;
    color: #868E96;

    option{
    font-weight: 400;
    font-size: 14.2426px;
    line-height: 26px;
    color: #868E96;
    }
    }
    }

    button{
    width: 80%;
    height: 2.5rem;
    background: #59323F;
    border: 1.2182px solid #59323F;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    cursor: pointer;
    }
`



