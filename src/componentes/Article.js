import styled from 'styled-components'

const Article = styled.article`
  display: inline-block;
  width: 370px;
  transition: box-shadow 0.2s ease;
  margin: 40px 10px 0 10px;
  background-color: #fafafa;
  border-radius: 5px;
  cursor: pointer;

  & > img {
    width: inherit;
    border-radius: 5px 5px 0 0;
  }

  & > p {
    margin: 5px 5px;
  }

  &:hover {
    box-shadow: 0px 20px 30px rgb(0, 0, 0, 0.6);
  }
  
`
export default Article