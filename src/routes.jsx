import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/inicio/Inicio";
import Cadastro from "./pages/cadastro/Cadastro";
import LoginAluno from "./pages/login/Login";
import BuscarVisitante from "./pages/buscar/Buscar";





export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
   <Route path="/" element={<Inicio/>}/>
   <Route path="/cadastro" element={<Cadastro/>}/>
   <Route path="/login" element={<LoginAluno/>}/>
   <Route path="/buscar" element={<BuscarVisitante/>}/>
            </Routes>
        </BrowserRouter>
    )
}