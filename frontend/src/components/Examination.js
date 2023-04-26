import React from 'react';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navi from '../Navi';
import PersoanlNew from './PersoanlNew';
import '../Styles/card.css';



const Examination = () => {
  return (
    <div>
      <Navi/>

      <div className='pic'>

    <img  src="frm.png" style={{objectFit:"cover"}}/>
  </div>
      <PersoanlNew/>
      
      <div>
    <Link to={"/courses"}>
    <img src="Foot.png" />
    </Link>
    </div>


    
    </div>
  )
}

export default Examination