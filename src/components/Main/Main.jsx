import React from 'react';
import './Main.css';
import Filter from '../Filter/Filter';
import Addition from '../Addition/Addition'
import Ideas from '../Ideas/Ideas';

function Main() {
  return (
    <section className='main'>
      <Filter />
      <Ideas />
      <Addition />
    </section>
  )
}
export default Main;