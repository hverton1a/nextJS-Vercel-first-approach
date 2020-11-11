import{useState} from 'react';


const Hello =()=>{
    return (<h2>Hello World</h2>)
}

function Home(){
    return     <div> 
         <h2>Home {Contador.contador}</h2>
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