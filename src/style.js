import styled from "styled-components";


export const Background = styled.div`
    background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

`

export const Message = styled.div`
    text-align: center;
    font-family: cursive;

    && p{
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    gap: .4rem;
    && h1{
        color: #ffff;
        font-weight: 600;
        letter-spacing: .1rem;
        margin: 0;
    }

    && img{
        width: 2rem;
        height: 2rem;
    }
`

export const ButtonS = styled.button`
    background: none;
    color:  #ffff;
    padding: 0 5rem;
    color: inherit;
  line-height: normal;
  overflow: visible;
  font-weight: bolder;

  && :hover{
      background-color: antiquewhite;
  }
`