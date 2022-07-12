/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';


/*const Page = styled.SafeAreaView`
flex: 1;`;*/



//align-itens: alinhar inverso do flex-direction
/*const Quadrado = styled.View`
width: 50px;
height: 50px;
backgroundColor: ${props=>props.cor};
`;
//flex:${props=>props.flex};
//quebrar itens pra baixo: flex-wrap: wrap;

const Header = styled.View`
flex-direction: row;
flex-wrap: wrap;
height: 200px;
backgroundColor: #EEE;
justify-content: center;
`;*/
const PageNormal = styled.View``;

const Page = styled.SafeAreaView`
flex: 1
justity-content: center;
align-items: center;`;

const InputName = styled.TextInput`
width: 200px;
height: 40px;
border: 1px solid #000;
`; 
 
//Enviando Props e UseState:
const Hello = ({frase}) => {
  
  const [name, setName] = useState('Matheus');
  const [flag, setFlag] = useState(false);

  const handleClick = () =>{
    setName(name);
    setFlag(!flag);

    //alert("Usuario: " + name);
  };

  const Area_Box = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  border: 3px dashed #000;
  margin-top: 30px;
  `;


  return (
    <View>
      <InputName value={name} onChangeText={n=>setName(n)}/>
      <Button title={flag ? 'Ocultar': 'Mostrar'} onPress={handleClick}/>
    <Text>{frase} : {name}</Text>
    {flag &&
    <Area_Box><Text>AREA BOX</Text></Area_Box>
    }
    </View>
  );
};

//Enviando Props e UseState:
const PagarContas = () => {
  
  const [bill, setBill] = useState('');  
  const [tip, setTip] = useState(0);
  const [porcentagem, setPorcentagem] = useState(10);


  
  const handleClickContas = () =>{
    let nBill = parseFloat(bill);
    //10% de gorjeta:
    if(nBill) setTip((porcentagem/100)* nBill);
    else alert("Digite um valor!!!"); 
       
  };

  
  const ResultArea = styled.View`
    width: 90%;
    margin-top: 30px;
    background-color: #EEE;
    padding: 20px;
    justify-content: center;
    align-items: center;
  `;
  const BtnContas = styled.Button`
  margin-top: 20px;
  `;

  const PageContas = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  `;
  const HeaderText = styled.Text`
  font-size: 25px;`;

  const InputContas = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;`;

  const TitleResult = styled.Text`
  font-size: 18px;
  font-weight: bold;
  `;

  const AreaPorcentagem = styled.View`
    flex-direction: row;
    margin: 20px;
    `;
    const BtnPorc = styled.Button``;

  const ItemResult = styled.Text`
  font-size: 15px;  
  `;
  return (
    <PageContas>
      <HeaderText>Calcuadora</HeaderText>
      <InputContas value={bill} keyboardType="numeric" placeholder="valor da conta" onChangeText={b=>setBill(b)}/>
      <AreaPorcentagem>
        <BtnPorc title="5%"  onPress={()=>setPorcentagem(5)}/>
        <BtnPorc title="10%" onPress={()=>setPorcentagem(10)}/>
        <BtnPorc title="15%" onPress={()=>setPorcentagem(15)}/>
      </AreaPorcentagem>
      <BtnContas title={`Aperte ${porcentagem}%`} onPress={handleClickContas}/> 
     {tip > 0 &&
     <ResultArea>
      <TitleResult>Valor da Conta</TitleResult>
      <ItemResult>{parseFloat(bill).toFixed(2)}</ItemResult>
     
      <TitleResult>Total GOrjeta</TitleResult>
      <ItemResult>R$ {tip.toFixed(2)} (`${porcentagem}%`)</ItemResult>

      <TitleResult>Total da Conta</TitleResult>
      <ItemResult>R$ {(tip + parseFloat(bill)).toFixed(2)}</ItemResult>

     </ResultArea>
      }
     </PageContas>
  );
};

//alinhar os itens diferente o items: align-self: 
export default () => {


  return (
     
    <PagarContas/>
    
      
      );
};
 // <Hello frase="Ola"/> 


