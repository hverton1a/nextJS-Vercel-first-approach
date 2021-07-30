import{useState} from 'react';


const Hello =()=>{
    return (<h2>React App/Git/Vercel</h2>)
}

function Home(){
    return     <div> 
         <h1>Primeiro deploy Vercel!</h1>
         <h2>Ainda é copiado mas é de coração.</h2>
         <Contador />
         </div>
}


const Contador = ()=>{
    const [contador, setContador]=useState(1)

    const adicionarContador=()=>{
        setContador(contador+1);
    }

    return(
        <div className="Counter-wrapper">
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home;
