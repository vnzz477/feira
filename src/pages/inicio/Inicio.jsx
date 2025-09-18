import React from "react";
import './Inicio.scss'
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div>

      <div className="inicio">
        <img className="logo-frei" src="/logoFREI.webp" alt="Logo Frei" />
        <div id="inicio" className="logo-centralizada">
          <img className="logo-feira" src="/FEIRA.webp" alt="Logo Feira" />
        </div>
      </div>

      <div className="center">
        <section className="titulo">
          <h2>Vª feira de profissões</h2>
          <p className="frase">Esforço que transforma, e o orgulho permanece</p>
          <img src="/xavier.PNG" height="300px" />
          <p className="frase2">

            Venha conhecer nossa feira de profissões<br />
            Estamos ansiosos pra conhecer você
          </p>
        </section>
      </div>

      <div className="terceira"></div>

      <nav className="menu">
        <a href="#inicio">Início</a>
        <a href="#cards">Cronograma</a>
        <a href="#sob">Sobre nós</a>
        <a href="#cont">Contato</a>
         <a href="/login">Administrativo</a>
     <a href="/cadastro" className="botao">Inscreva-se</a>
      </nav>

      <section className="edicao">
        <p><span className="edicao-num">5ª edição</span> | Feira de profissões</p>
        <div id = "cards"className="cards">
          <img src="/img 1.PNG" alt="Imagem 1" />
          <img src="/img2.PNG" alt="Imagem 2" />
          <img src="/img3.PNG" alt="Imagem 3" />
        </div>
      </section>

      <section className="descricao">
        <p className="text">
          Um evento feito para você se inspirar, experimentar e encontrar seu caminho profissional!
        </p>
        <p className="hashtag">#Vemprofrei</p>

        <button id="prof" className="cronograma">Cronograma</button>
      </section>

      <div className="profissao">
        <div className="info">
          <h2>Feira de Profissões</h2>
          <div className="prof">
          <p>📅 Data: 29 de setembro de 2025</p>
          <p>🕘 Horário: das 9h às 18h</p>
          <p>
            📍 Local: Av. Coronel Octaviano de Freitas Costa, 463 <br />
            – Veleiros, São Paulo - SP
          </p>
          </div>
        </div>
        <div className="imagem">
          <img src="/escola.png" alt="Instituto Frei" />
        </div>
      </div>

      <div className="evento">
        <h2>Atrações do Evento</h2>
        <p>
          • Térreo <br />
          • 1º Andar voltado para o curso de Administração <br />
          • 2º Andar voltado para o curso de Informática e comunicação visual <br />
          • 3º Andar Palestras <br />
        </p>
      </div>

      <div id="sob" className="sob">
        <button className="cronograma">Sobre nós</button>
      </div>

      <div className="sobre">
        <img src="/todosprof.webp" alt="Todos os Professores" />
        <p>
          O Instituto Nossa Senhora de Fátima, localizado no extremo sul <br />
          de São Paulo, é uma instituição dedicada à formação <br />
          de jovens de baixa renda, oferecendo oportunidades de <br />
          educação e qualificação profissional. Com um compromisso <br />
          firme de inclusão social, o instituto oferece vários cursos, <br />
          capacitando seus alunos para o mercado de trabalho. <br />
          Ao longo dos anos, o Instituto tem se destacado <br />
          por seu impacto transformador na vida de jovens, <br />
          promovendo não apenas conhecimento técnico, mas <br />
          também habilidades comportamentais, sociais e <br />
          tecnológicas essenciais para o sucesso profissional. <br />
        </p>
      </div>

      <div className="contato">
        <div className="contato-left">
          <img src="/frei.webp" alt="Logo Instituto" className="logo-contato" />
          <div className="social-icons">
            <a href="https://www.instagram.com/institutonsfatima/" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/institutonsfatima/?locale=pt_BR" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://br.linkedin.com/company/institutonsfatima" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="http://www.youtube.com/@institutosocialnossasenhor3548" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="contato-center">
          <h2 id="cont">Contato</h2>
          <a
            href="https://maps.app.goo.gl/vC5gvedCy4Fqwvoc8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instituto Social Nossa Senhora de Fátima<br />
            Av. Cel. Octaviano de Freitas Costa, 463<br />
            Veleiros – São Paulo - SP 04773–000
          </a>
          <p className="copyright">
            © 2025 Todos os direitos reservados para<br />
            Instituto Social Nossa Senhora de Fátima.
          </p>
        </div>

        <div className="contato-right">
          <p>(11) 3798-5037 - secretaria</p>
          <p>(11) 96398-6252 - secretaria - whatsapp</p>
          <p>
            <a href="mailto:secretaria@acaonsfatima.org.br">secretaria@acaonsfatima.org.br</a>
          </p>
          <p>
            <a href="mailto:adm@acaonsfatima.org.br">adm@acaonsfatima.org.br</a>
          </p>
        </div>
      </div>
    </div>
  );
}
