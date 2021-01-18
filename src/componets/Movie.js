import React from "react";
import {Link} from "react-router-dom"; //  a태그의 href 는 React에서 사용 하면안됨, 지양... 그때 그 역할을 Link 가함
import styled from "styled-components";
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
export default ({id}) => (
    //링크 시키기 
<div>
    <Link to={`/${id}`}>{id}</Link>
</div>
);