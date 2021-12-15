import {BrowserRouter as Routes, Route} from "react-router-dom";
import Record from "./components/pages/Record";
import Home from "./components/pages/home";
import Header from "./components/Header";


const DRoutes = () => (
 <Routes>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/record' element={<Record />} />
    </Routes>
  </Routes>
);

export default DRoutes;

// baixar a biblioteca react-router-dom
// BrowerRouter engloba toda as rotas
// path caminho
// nome da variavel const