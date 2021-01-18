import React from "react";
import { gql,useQuery } from '@apollo/client';
import styled from "styled-components"; //import for tag generation
import Movie from "../componets/Movie";

//Graph QL query 정의 여기서 isLiked는 백엔드가 아닌 Client에서 가져오는 것으므로 @client를 붙혀준다  
const GET_MOVIES =gql` 
 {
     movies{
         id
         name
         isLiked @client
      
     }
 }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
    const {loading,error,data} =useQuery(GET_MOVIES); //위에 정의한 Query를 통하여 loading,error,data 가져오기
    
    // loading은 true 로 날로오기때문에 loadnig && <Loading>.. 은 loading이 true일 때 <Loading> 태그를 보여줘라
    //이후 data?.movies? -> data왔나? 거기서 movies도 왔나? 2중 검사 후 해당 값을 m값으로 접근하여 Movie tag안에 값을 넣어준다
    return (
        <Container>
        <Header>
          <Title>Apollo 2020</Title>
          <Subtitle>I love GraphQL</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>} 
        
        
          {data?.movies?.map(m => (
              
            <Movie
              key={m.id}
              id={m.id}
              isLiked={m.isLiked}
            />
          ))}
  
      </Container>
    );
    };