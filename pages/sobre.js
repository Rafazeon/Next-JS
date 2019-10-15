import React from 'react';
import GuestLayout from '../src/Components/Finance/guest-layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  grid: {
    padding: 10
  },
  txt: {
    fontSize: 20,
    fontWeight: 500,
    padding: 30,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 400
  }

}))

export default function Sobre() {
    const classes = useStyles();
    return (
        <GuestLayout>
        <Grid className="container" container>
            <Grid className={classes.grid} item xs={12}>
                <div className={classes.txt}>Nossa História</div>
                <p className={classes.subtitle}>Somos uma empresa nascida fisicamente em Florianópolis (SC) – mas nativamente digital – com o objetivo de revolucionar o modelo tradicional de empréstimo consignado. Surgimos da necessidade do próprio mercado, de levar para o ambiente digital uma nova forma de consulta e liberação de empréstimo consignado em folha de pagamento.</p><br/>

                <p className={classes.subtitle}>Sem filas ou atendimento ruim, com muito menos burocracia e com a total discrição do ambiente digital. Temos parceria com alguns dos principais bancos e instituições financeiras do Brasil, além de um sistema de consultas online prático e preciso. Assim podemos oferecer as melhores negociações e deixar o poder de decidir quanto, como e quando solicitar a liberação dos créditos disponíveis para você!</p><br/>

                <p className={classes.subtitle}>Em nosso site você leva menos de dois minutos para consultar os créditos disponíveis, personalizar seu pedido de crédito consignado de forma simples e intuitiva e até verificar os contratos gerados em sua tela.</p><br/>

                <p className={classes.subtitle}>Sem intervenção de terceiros, mas com diversos canais de comunicação – inclusive interação em tempo real – para que você, quando quiser e se quiser, possa sanar todas as dúvidas e garantir o crédito na medida certa da sua necessidade, com as melhores taxas do mercado.</p>
            </Grid>
         </Grid>
        </GuestLayout>
      );
 }