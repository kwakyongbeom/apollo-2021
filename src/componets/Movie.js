import React from "react";
import {Link} from "react-router-dom"; //  a태그의 href 는 React에서 사용 하면안됨, 지양... 그때 그 역할을 Link 가함
import styled from "styled-components";
import { gql,useMutation,useQuery } from '@apollo/client';

//apollo.js에 있는  mutation toggleLikeMovie와 연결 여기서 argument값을 넘겨준다
const LIKE_MOIVE =gql`
    mutation toggleLikeMovie($id: Int!,$isLiked: Boolean!)
    {
        toggleLikeMovie(id:$id,isLiked:$isLiked) @client 
    }
`;
 //여기서 중요한게 mutation이 @client에 있다는 것을 알려줘야함, backend로 보내기 싫음 

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;
export default ({id,isLiked}) => {
    const [toggleMovie] =useMutation(LIKE_MOIVE,{variables:{id:parseInt(id),isLiked}}); //LIKE_MOVIE mutation을  실행하고 그 때 argument들을 id(int)와 isLiked를 보내라
    //그러면 apollo.js의 toggleMovie callback 함수가 실행된다 useMutation의 결과가 함수 이벤트 여서 [] 이렇게 쓴 듯
    //링크 시키기 
    //생성된 함수 이벤트를 onClick에 등록
return(
<Container>
    <Link to={`/${id}`}>{id}</Link>
    <button onClick={toggleMovie}>{isLiked ? "Unlike":"Like"}</button>
</Container>
);
};