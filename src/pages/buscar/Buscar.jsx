import React, { useState } from "react";
import api from "../../api";
import "./Buscar.scss";

export default function BuscarVisitante() {
  const [emailBusca, setEmailBusca] = useState("");
  const [visitante, setVisitante] = useState(null);
  const [erro, setErro] = useState("");

 
  async function buscarVisitante() {
    try {
      if (!emailBusca.trim()) {
        setErro("Digite um e-mail para buscar."); setVisitante(null); return;
      }

      const response = await api.get("/cadastros/filtro/email", {
        params: { email: emailBusca }
      });

      if (response.data && response.data.length > 0) {setVisitante(response.data[0]);
        setErro("");
      } else {
        setVisitante(null);
        setErro("Visitante não encontrado.");
      }
    } catch (err) {
      console.error(err);
      setVisitante(null);
      setErro("Erro ao buscar visitante.");
    }
  }

  return (
    <main className="buscar-container">
      <div className="buscaVis">
        <img src="/logoFREI.webp" alt="Logo" className="logo" />
        <h1><b>Buscar – Visitante</b></h1>
        <p className="subtitulo">Área Administrativa</p>

        <div className="acharVis">
          <input type="text" placeholder="Insira o email do visitante nesse campo" value={emailBusca} onChange={(e) => setEmailBusca(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter") buscarVisitante();
            }}
          />
          <button onClick={buscarVisitante} className="btn-vincular" style={{ marginTop: "10px" }}>
            Buscar
          </button>
        </div>

        {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}

        {visitante && (
          <div className="formulario">
            <div className="form-group">
              <label>Nome</label>
              <div className="linha">{visitante.nome}</div>
            </div>
            <div className="form-group">
              <label>CPF</label>
              <div className="linha">{visitante.cpf}</div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <div className="linha">{visitante.email}</div>
            </div>

            <div className="botao-container">
              <button type="button" className="btn-vincular">
                Vincular
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="areaADM">
        <img src="/pc.png" alt="Foto" className="foto" />
        <p className="bemvindo">Bem-vindo à área administrativa</p>
      </div>
    </main>
  );
}
