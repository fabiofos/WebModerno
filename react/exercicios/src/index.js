import React from 'react'
import ReactDom from 'react-dom'
// import BomDia from './componentes/BomDia'

// import Multi, {BoaNoite} from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

 ReactDom.render(
//  <div>
//  <BomDia nome="paula"/>
//  <Multi.BoaTarde nome="guilherme"/>
//  <BoaNoite nome="fabio"/>
//  </div>
// <Saudacao tipo="Bom Dia" nome=" Fabio" /> 
<Pai nome="Fabio" sobrenome="Silva">
 <Filho nome="Paulo" />
 <Filho nome="Ana"  />
 <Filho nome="Claudia" />
</Pai>

 , document.getElementById('root'))