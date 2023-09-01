import styled from "styled-components";


export const MainDiv=styled.div`
height:400px;
width:1000px;
display:flex;
justify-content:center`

export const Section =styled.section`
background-color:${props=>props.bgColor}
`
// export const Input=styled.input.attrs({})``

//TO CHANGE THE BACKGROUNDCOLOR 

// function App() {
//     const[backcolor,changecolor]=useState('');
//     const [color, changeback]=useState('backcolor');
//     const bcolor=()=>{
//       changeback(backcolor)
//     }
    
//     return (
//       <MainDiv>
//     <Section bgColor={color}>
//         <input type="text" placeholder="type the color" onChange={e=>changecolor(e.target.value)}></input>
//         <button id="buttons" onClick={bcolor}>click to change color</button>
  
//       </Section>
//       </MainDiv>
//     )}
  
  
    
//   export default App;



