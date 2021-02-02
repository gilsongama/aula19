import axios from 'axios';
import React, { useRef, useState } from 'react';
import './App.css';



function App() {

  const [cadastro, setCadastro] = useState<string>();

  let inputName = useRef<HTMLInputElement>(null);
  let inputAge = useRef<HTMLInputElement>(null);
  let inputCompany = useRef<HTMLInputElement>(null);
  let inputPhone = useRef<HTMLInputElement>(null);


  const enviaFormulario = () => {
    const meuNome = inputName.current?.value
    const minhaIdade = inputAge.current?.value
    const minhaCompania = inputCompany.current?.value
    const meuTelefone = inputPhone.current?.value

  
    axios.post('http://localhost:4000/usuarios', {
      meuNome,
      minhaIdade,
      minhaCompania,
      meuTelefone
    }).then(resposta => {
      if (resposta.status === 201) {
        setCadastro('Cadastro realizado com sucesso!')
      }
    })
  }
    

  return (
   
    
    <div className="App">
      <h2>Formulário</h2>
      
      <input type="text" placeholder="Digite o nome" ref={inputName}/>
      <input type="text" placeholder="Digite a idade" ref={inputAge}/>
      <input type="text" placeholder="Digite a empresa" ref={inputCompany}/>
      <input type="text" placeholder="Digite o telefone" ref={inputPhone}/>

      <button onClick={enviaFormulario}>Enviar</button>

      <p>{cadastro}</p>

    </div>
  );
}

export default App;
