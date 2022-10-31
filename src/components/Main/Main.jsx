import React from 'react';
// import './Main.css';
import {Box, Button, Card, CardContent, styled, Typography} from "@mui/material";

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