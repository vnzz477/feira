import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import "./Login.scss";

export default function LoginAluno() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function realizarLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email: email,
        senha: senha
      });

 
      alert('Login realizado com sucesso!');
      
     
      navigate('/buscar');
    } catch (err) {
     
      if (err.response && err.response.data && err.response.data.erro) {
        alert(err.response.data.erro);
      } else {
        alert('Erro ao tentar fazer login.');
      }
    }
  }

  return (
    <main className="container">
      <section className="lado-esquerdo">
        <img src="/escola.png" alt="Instituto Frei" className="foto-escola" />
        <p className="hashtag">Local Administrativo</p>
      </section>

      <section className="lado-direito">
        <div className="cabecalho-formulario">
          <div>
            <h1>Login - Aluno</h1>
            <p>Vª feira de profissões</p>
          </div>
          <img src="/logoFREI.webp" alt="Logo Frei" className="logo" />
        </div>

        <form className="formulario" onSubmit={realizarLogin}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"  placeholder="Digite seu E-mail" value={email}onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

          <button type="submit" className="btn-login">Login</button>
        </form>
      </section>
    </main>
  );
}
