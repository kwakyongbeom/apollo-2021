import React from "react";
import { gql,useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

const GET_MOVIE=gql`
    query getMovie($id:Int!){
        movie(id:$id)
        {
           
            name
           
        }
    }
`;

export default () => {
    const {id}= useParams(); //Parameter 얻기,  App.js에 형식선언
    const {loading,data}=  useQuery(GET_MOVIE,{variables: { id: parseInt(id) },}); //해당 파라미터는 무조건 String으로 받아오기때문에 id는 Int이므로 전환 이후 그 id를 이용하여 위의 getMoive query 실행
    if(loading)
    {
        return "loadiong";
    }
    if(data&&data.movie)
    {
        return data.movie.name;
    }
}; 