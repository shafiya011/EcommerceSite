import styled from "styled-components";

export const Container = styled.div`
  // border:1px solid grey;
  text-align: center;
  padding: 5px;
  width: 40%;
  height: 37vh;
  margin: auto;
  background-color: rgb(202, 219, 249);
`;
export const Card = styled.div`
  width: 100%;
  // border:1px solid black;
  margin: 10px 5px;
  padding: 10px;
  box-shadow: 5px 5px 7px grey;
  display: grid;
  grid-template-columns: 35% 65%;
  box-shadow: 5px 5px 5px pink;
`;

// export const Image=styled.div`
// width:25%;
// height:100%;
// border-radius:50px;`

export const Head = styled.div`
  font-family: "serif";
  padding: 5px;
  margin: 5px;
  font-size: 18px;
  font-weight: 800;
  color: darkblue;
`;
export const DataDiv = styled.div`
  display: flex;
`;
export const Page = styled.div`
backgrundimage;
`;
// fetching API

export const Data = styled.div`
  // border:1px solid black;
  border-radius: 20px;
  width: 400px;
  // height:100px;
  padding: 5px;
  margin: 12px;
  box-shadow: 3px 5px 5px pink;
  text-align: center;
  font-weight: 800;
  display: grid;
  font-size: 18px;
  color: black;
  &:hover {
    scale: 1.05;
  }
`;
export const Main = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
margin:auto;
padding:auto
text-align:center;
`;
export const Image = styled.img`
  margin: auto;
  text-align: center;
  mix-blend-mode: multiply;
  padding: 25px;
  // font-size:50px;
  height: 140px; 
  width: 115px;
`;
export const Button = styled.button`
  width: 20%;
  text-align: center;
  margin: auto;
  border: none;
  border-radius: 10px;
  padding: 5px;
  &:hover {
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  }
`;
export const Title = styled.p`
text-overflow: ellipsis;
width: 230px;
margin: auto;
text-align:centre;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
padding: 20px;
color: "black";
fontWeight: "600";
`
export const HomeData = styled.div`
border:1px solid black;
  border-radius: 20px;
  width: 400px;
//   height:500px;
  padding: 5px;
  margin: 12px;
  box-shadow: 3px 5px 5px grey;
  text-align: center;
  font-weight: 800;
  display: grid;
  font-size: 18px;
  color: black;
  &:hover {
    scale: 1.05;
  }
`
export const HomeDiv = styled.div`
border:2px solid black;
box-shadow: 2px 2px 2px grey;`

export const ProductTable =styled.table`
border-spacing: 15px;
width: 100%;
border-collapse: separate;
padding: 5px;
border: 1px solid black;
margin:auto;
text-allign:center;
`
export const TotalPrice =styled.span`
margin:auto;
padding:auto;
text-allign:center;
font-weight:600;
font-size:20px
`
export const H1 =styled.div`
margin: auto;
text-align: center;
padding:20px;
font-weight:800;
font-Size:29px
`
export const NavButton=styled.div`
borderRadius:"60px";
padding:"2px";
borderColor: pink;
`
export const HomeImage=styled.img`
height:250px;
width:250px;

margin: auto;
  text-align: center;
  mix-blend-mode: multiply;
  padding: 25px;

  `

export  const FooterStyle=styled.div`
height:8%;
bottom:0;
margin-bottom:0;
background-color:black;
color:white;
position:fixed;
display:flex;
width:100%;
`

export const FooterUl = styled.ul`
display:flex;
text-decoration:none;
list-style: none;
margin:10px;
padding:10px`
export const FooterList = styled.li`
padding:5px;
font-size:17px;
cursor:pointer
`