import React from 'react';
import GuestLayout from '../src/Components/Finance/guest-layout';
import { About, BackgroundImg, Banner, Process } from '../src/Components/Finance/utilities'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bgStyle: {
    backgroundImage: `url('/assets/img/refinanciamento.png')`, 
    backgroundSize: 'cover', 
    backgroundPositionY: '35%'
  },
  gridStyle: {
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      height: '40%'
    },
    height: 550
  }, 
  gridBreakpoint: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flexBasis: '100%'
    }
  },
  titleStyle: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 30
  },
  subTitleStyle: {
    marginBottom: 30,
    fontWeight: 400,
    fontSize: 22
  }
}));

export default function() {
  const classes = useStyles();

  return (
  <GuestLayout>
    <div>
    <section className="hero is-large is-info is-bold">
      <div className={`${classes.bgStyle} hero-body`} />
    </section>
    <section className="m-t-lg">
      {BackgroundImg(classes.gridStyle, classes.gridBreakpoint, classes.titleStyle, classes.subTitleStyle)}
    </section>
    <hr />
    <section>
      {About(classes.gridBreakpoint)}
    </section>
    <section>
      {Banner('Como posso fazer um empréstimo consignado com a Lira Financeira?', 'É muito simples. Basta ser funcionário contratado com carteira assinada.')}
    </section>
    <section>
      {Process(classes.gridBreakpoint)}
    </section>
    </div>
  </GuestLayout>
  )
};
