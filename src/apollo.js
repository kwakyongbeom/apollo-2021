import { ApolloClient, InMemoryCache } from '@apollo/client';

//전체적인 서버 설정을 하는 곳 
//Apollo Dev tool
//https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US
const client = new ApolloClient({  //client 설정 
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    resolvers:{ //resolver 백엔드나 api에서 resolve하는 역할 ,하지만 여기서 즉 client에서 선언한다는건 client resolver=cache 라고 생각하자 
        Movie:{ //Apollo Cache에 있는 타입 과 같아야함 여기서는 Movie 속성 객체에 isLiked라는 필드를 client 선에서 추가해준다 defualt 값은 false
            isLiked:() =>false //이후 Home.js 로 가서 Query를 다시 만져요청한다 
        },
        Mutation:{
            toggleLikeMovie:(_,{id,isLiked},{cache}) =>{ //id,isLiked 와 cache를 사용하겠다 ,연관된 mutation 언급 분은 Movie.js에 있음 
               cache.modify({ //캐쉬 수정 
            id:`Movie:${id}`, //이 형태는 apollo dev tool의 cache 부분에 보면  0:Movie:4 -> id:`타입:${id}`
            fields:{ //캐쉬에서 바꾸구 싶은 속성 
                isLiked: () =>!isLiked, //isLiked속성을 현재 속성의 정반대 즉,ture -> false,false->true로 설정 
            }
        });
            },
        
        }
    },
  
  });

export default client;