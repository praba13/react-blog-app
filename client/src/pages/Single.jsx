import React from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import Userimg from '../img/man1.jpg';
import PostImg from '../img/showcase.jpg';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src={PostImg} alt='Bild1' />
        <div className='user'>
          <img src={Userimg} alt='Bild2' />
          <div className='info'>
            <span>Baba</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='' />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            non ad laboriosam laborum obcaecati sunt nam reiciendis accusamus
            perferendis deleniti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            possimus, commodi rerum blanditiis, fuga qui adipisci et doloremque
            eaque illo aperiam nulla vero, asperiores nobis quos eligendi
            excepturi. Blanditiis, veniam!
          </p>
        </p>
      </div>
      {/*<div className='menu'>m</div>*/}
      <Menu />
    </div>
  );
};

export default Single;
