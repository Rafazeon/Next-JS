import React from 'react';
import GuestLayout from '../src/Components/Finance/guest-layout';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: 10
  },
  btn: {
    width: '100%',
    marginTop: 10
  },
  txt: {
    fontSize: 20,
    padding: 30
  },
  map: {
    width: '100%',
    height: 526
  },
  title: {
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center'
  },
  gridBreakpoint: {
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        flexBasis: '100%'
    },  
    padding: 10
  }
}))

export default function Contato() {
    const classes = useStyles();
    return (
        <GuestLayout>
        
        <Grid className="container" container>
         <Grid item xs={12}>
             <div className={classes.txt}>Mande-nos uma mensagem. Iremos entrar em contato em breve para entender melhor suas necessidades e propor possíveis soluções.</div>
         </Grid>
         <Grid className={classes.gridBreakpoint} item xs={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.903837963692!2d-48.55464258498715!3d-27.596510782837985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527391f9cc2ec5d%3A0xe991c882b522f6e3!2sEmpr%C3%A9stimos%20Del%20Promotora!5e0!3m2!1spt-BR!2sbr!4v1569932861871!5m2!1spt-BR!2sbr" className={classes.map}></iframe>
         </Grid>
         
         <Grid className={classes.gridBreakpoint} item xs={6}>
          <Card>
           <CardContent>
            <h1 className={classes.title}>CONTATO</h1>
          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Nome"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="E-mail"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Telefone"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Assunto"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Mensagem"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          </FormControl>
          <Button size="large" className={classes.btn} variant="contained" color="primary">
            Enviar
         </Button>
         </CardContent>
         </Card>
         </Grid>
         
        </Grid>
        </GuestLayout>
      );
 }