import React from 'react'
import { Container, InputLabel, Button } from '@mui/material/';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: '380px !important',
    height: '524px',
    padding: '10px 30px',
    display: 'block',
    background: '#EAE7DC',
    marginTop: 60
  },

  screen: {
    textAlign: 'right',
    background: '#ffffff',
    padding: '10px',
  },

  operation: {
    fontSize: '14px !important',
    color: 'gray !important'
  },
  
  result: {
    fontSize: '25px !important',
    color: 'black !important'
  },

  button: {
    width: 80,
    height: 80,
    fontSize: '20px !important',
    backgroundColor: '#E85A4F !important',
    color: 'black !important',
    borderRadius: '120px !important'
  }
});

const Calculator = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <form className={classes.screen}>
        <InputLabel className={classes.operation}>
          10 x 10  
        </InputLabel>
        <InputLabel className={classes.result}>
          100
        </InputLabel>
      </form>

      <Button className={classes.button}>C</Button>
      <Button className={classes.button}>+/-</Button>
      <Button className={classes.button}>%</Button>
      <Button className={classes.button}>DEL</Button>
      
      <Button className={classes.button}>7</Button>
      <Button className={classes.button}>8</Button>
      <Button className={classes.button}>9</Button>
      <Button className={classes.button}>/</Button>
      
      <Button className={classes.button}>4</Button>
      <Button className={classes.button}>5</Button>
      <Button className={classes.button}>6</Button>
      <Button className={classes.button}>*</Button>
      
      <Button className={classes.button}>1</Button>
      <Button className={classes.button}>2</Button>
      <Button className={classes.button}>3</Button>
      <Button className={classes.button}>-</Button>
     
      <Button className={classes.button}>0</Button>
      <Button className={classes.button}>.</Button>
      <Button className={classes.button}>=</Button>
      <Button className={classes.button}>+</Button>
    </Container>
  )
}

export default Calculator;