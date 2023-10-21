// CSS
import "./Membros.css"

//Foto dos Membros
import membroEmerson from "../../assets/imgs/fotoEmerson.png"
import membroEzequiel from "../../assets/imgs/fotoEzequiel.png"
import membroFilipe from "../../assets/imgs/fotoFilipe.png"
import membroHenrique from "../../assets/imgs/fotoHenrique.png"
import membroLeticia from "../../assets/imgs/fotoLeticia.png"
import membroWalber from "../../assets/imgs/fotoWalber.png"
import membroJoao from "../../assets/imgs/fotoJoao.png"
import membroKarine from "../../assets/imgs/fotoKarine.png"
import membroNatanael from "../../assets/imgs/fotoNatanael.png"
import membroAlcides from "../../assets/imgs/fotoAlcides.png"

//Foto dos ícones
import github from "../../assets/imgs/github.png"
import linkedin from "../../assets/imgs/linkedin.png"
import site from "../../assets/imgs/site.png"


const Membros = () => {
  return (
   <>
      
    <h1 className="textoMembros"> Membros Ativos</h1>

    
    <div className="container">
      
      <h2 className="tituloMembros"> Fundador </h2>

      {/* Card Emerson */}
        <div className="card">
          <img src={membroEmerson} alt="" />
          <h1 className="nome"> Everson da Silva Gomes</h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa:</p> 
            <p>Modelagem Molecular, DFT, Superfícies Metálicas.</p>
          </div>
          <a href="" target="_blank" rel="noreferrer"> 
            <img src={github} alt="" />
          </a>
        </div>


      <h2 className="tituloMembros"> Mentores</h2>

      {/* Card Ezequiel*/}
          <div className="card">
          <img src={membroEzequiel} alt="" />
          <h1 className="nome"> M.Sc Ezequiel Sa</h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa: </p>
            <p>Análise Multiescala em Redes Neurais com Topologias Regulares.</p> 
          </div>
          <a href="github.com/EzequielS2/EzequielS2/" target="_blank" rel="noreferrer"> 
            <img src={github} alt="" />
          </a>
        </div>


        {/* Card Henrique*/}
        <div className="card">
          <img src={membroHenrique} alt="" />
          <h1 className="nome"> Dr. Henrique de Castro</h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa:</p>
            <p> Modelagem Molecular, magnetismo molecular de compostos organometálicos, fotofísica orgânica.</p> 
          </div>
          <a href="https://fediscience.org/@hcs/" target="_blank" rel="noreferrer"> 
            <img src={site} alt="" />
          </a>
        </div>


        {/* Card Leticia*/}
        <div className="card">
          <img src={membroLeticia} alt="" />
          <h1 className="nome"> Leticia Maria Pequeno Madureira </h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa:</p>
            <p>Machine Learning, Métodos Computacionais, Linguagem Julia.</p> 
          </div>
          <a href="" target="_blank" rel="noreferrer"> 
            <img src={github} alt="" />
          </a>
        </div>


        {/* Card Walber*/}
        <div className="card">
          <img src={membroWalber} alt="" />
          <h1 className="nome"> Dr. Walber Guimarães </h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa:</p>
            <p>Modelagem Molecular, DFT, Química do Estado Sólido e Interfaces</p> 
          </div>
          <a href="https://www.linkedin.com/in/walber-junior-aaa39a140/" target="_blank" rel="noreferrer"> 
            <img src={linkedin} alt="" />
          </a>
        </div>


        <h2 className="tituloMembros"> Desenvolvedores</h2>

       {/* Card Alcides */}
       <div className="card">
          <img src={membroAlcides} alt="" />
          <h1 className="nome">Alcides Ribeiro</h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa:</p>
            <p>Otimização e Algoritmos</p>
          </div>
          <a href="https://github.com/srcid" target="_blank" rel="noreferrer"> 
            <img src={github} alt="" />
          </a>
        </div>


        {/* Card Filipe*/}
          <div className="card">
            <img src={membroFilipe} alt="" />
            <h1 className="nome"> Filipe Chagas Ferraz</h1>
            <div className="atuacao"> 
              <p>Tópico da pesquisa:</p>
              <p>Computação quântica e machine learning.</p> 
            </div>
            <a href="https://www.linkedin.com/in/filipe-chagas-ferraz-16a9371b8/" target="_blank" rel="noreferrer"> 
              <img src={linkedin} alt="" />
            </a>
          </div>


        {/* Card Joaão*/}
        <div className="card">
          <img src={membroJoao} alt="" />
          <h1 className="nome">João Gabriel da Silva Gomes</h1>
          <div className="atuacao"> 
            <p>Desenvolvedor Front-end</p>
            <p>Javascript</p> 
          </div>
          <a href="" target="_blank" rel="noreferrer"> 
            <img src={github} alt="" />
          </a>
        </div>


        {/* Card Karine*/}
        <div className="card">
          <img src={membroKarine} alt="" />
          <h1 className="nome"> Karine da Silva Melo</h1>
          <div className="atuacao"> 
            <p>Desenvolvedora Front-end</p>
            <p>Javascript</p> 
          </div>
          <a href="" target="_blank" rel="noreferrer"> 
            <img src={github}alt="" />
          </a>
        </div>

        {/* Card Natanael*/}
        <div className="card">
          <img src={membroNatanael} alt="" />
          <h1 className="nome"> Natanael Antonioli</h1>
          <div className="atuacao"> 
            <p>Tópico da pesquisa:</p>
            <p>Divulgação científica e checagem de fatos.</p> 
          </div>
          <a href="" target="_blank" rel="noreferrer"> 
            <img src={github} alt="" />
          </a>
        </div>

      </div>
  </>
  )
}

export default Membros