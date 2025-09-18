import React, { useState } from "react";
import './Cadastro.scss'
import api from "../../api";



export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [escolaridade, setEscolaridade] = useState('')
  const [interesse, setInteresse] = useState('')
  const [previsao, setPrevisao] = useState('')
  const [ja_cursou, setJa_cursou] = useState('')
  const [como_soube, setComo_soube] = useState('')


  async function criarCadastro() {
    await api.post('/cadastros', {
      "nome": nome,
      "cpf": cpf,
      "email": email,
      "escolaridade": escolaridade,
      "interesse": interesse,
      "previsao": previsao,
      "ja_cursou": ja_cursou,
      "como_soube": como_soube
    })
      .then(() => alert('Cadastro Concluido!'))
  }


  return (
    <main className="container">
      <section className="lado-esquerdo">
        <img
          src="/escola.png" className="foto-escola" />
        <h2>
          Seu futuro começa<br />na Feira do Frei!
        </h2>

        <p className="hashtag">#Vemprofrei</p>

        <div className="alunos">
          <img src="/alunos-removebg-preview.png" alt="Alunos sorrindo" />
        </div>
      </section>

      <section className="lado-direito">
        <div className="cabecalho-formulario">
          <div>
            <h1>Cadastre-se</h1>
            <p>Vª feira de profissões</p>
          </div>

          <img src="/frei.webp" alt="Logo Frei" className="logo" />
        </div>

        <form action="/cadastro" method="POST" className="formulario">
          <label htmlFor="nome">Nome:</label>
          <input type="text" placeholder="Digite seu Nome" required value={nome} onChange={(e) => setNome(e.target.value)} />

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" required value={cpf} onChange={(e) => setCpf(e.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)} />


          <label htmlFor="escolaridade">Escolaridade:</label>
          <select id="escolaridade" name="escolaridade" value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)}>
            <option value="">Selecione...</option>
            <option value="Ensino Fundamental">Ensino Fundamental</option>
            <option value="Ensino Medio">Ensino Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>


          <label htmlFor="interesse">Interesse em Algum Curso?</label>
          <input type="text" id="interesse" name="interesse" placeholder="Sim/Não" value={interesse} onChange={(e) => setInteresse(e.target.value)} />

          <label htmlFor="hora">Previsão de Chegada à Feira:</label>
          <input type="text" placeholder="Informe seu horário de chegada" value={previsao} onChange={(e) => setPrevisao(e.target.value)} />

          <label htmlFor="ja-fez">Já fez algum curso no Instituto?</label>
          <input type="text" id="ja-fez" name="ja-fez" placeholder="Sim/Não" value={ja_cursou} onChange={(e) => setJa_cursou(e.target.value)} />

          <label htmlFor="divulgacao">Como ficou sabendo da Feira?</label>
            <select id="divulgacao" name="divulgacao" value={como_soube} onChange={(e) => setComo_soube(e.target.value)}>
            <option disabled selected>Selecione...</option>
            <option value="Amigos">Amigos</option>
            <option value="Instagram">Instagram</option>
            <option value="Tik Tok">Tik Tok</option>
            <option value="Facebook">Facebook</option>
          </select>
      

          <button type="submit" onClick={criarCadastro}>Cadastrar</button>
        </form>
      </section>
    </main>
  );
}
