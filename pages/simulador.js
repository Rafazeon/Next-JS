import React, { Component } from 'react'
import GuestLayout from '../src/Components/Finance/guest-layout';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import CurrencyInput from 'react-currency-input';

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    color: '#000',
  },  
  container: {
    justifyContent: 'center'
  }, 
  field: {
    display: 'grid'
  },
  textField: {
    marginLeft: 10,
    marginRight: 10
  },
  txt: {
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  card: {
    padding: 30,
    marginTop: 20
  },
  button: {
    margin: 10
  },
  input: {
    padding: 13,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18
  }
}

class Simulador extends Component {
    constructor(props) {
        super(props)

        this.state = {
            insurance: "1",
            amount: '0.00',
            value_total: 0.00
        }
    }
    
    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    calculateSimulator = () => {
        let { insurance, amount } = this.state
        let result1 = 0.00
        let result2 = 0.00
        let result3 = 0.00  
        let result4 = 0.00
        
        amount = amount.replace(/[^\d.-]/g, '')
        amount = parseFloat(amount)

        switch (insurance) {
            case '1':
                result1 = amount * 0.04191
                result2 = amount * 0.03558
                result3 = amount * 0.0316
                result4 = amount * 0.02908
                break;

            case '2':
                result1 = amount * 0.041142
                result2 = amount * 0.034294
                result3 = amount * 0.030336
                result4 = amount * 0.027819

                break;
            
            case '3':
                result1 = amount * 0.04459
                result2 = amount * 0.03786
                result3 = amount * 0.03403
                result4 = amount * 0.03124

                break;

            case '4':
                result1 = amount * 0.041265
                result2 = amount * 0.034486
                result3 = amount * 0.030576
                result4 = amount * 0.028097

                break;

            default:
                break;
        }
        
        return {result1, result2, result3, result4}
    }

    resultSimulator = (classes) => {
        const { result1, result2, result3, result4 } = this.calculateSimulator()
        
        return (
        <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>36x de <br /> R${result1.toFixed(2)}</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>48x de <br /> R${result2.toFixed(2)}</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>60x de <br /> R${result3.toFixed(2)}</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>72x de <br /> R${result4.toFixed(2)}</Paper>
              </Grid>
            </Grid>
          </div>
        )
    }

    render() {
        const { classes } = this.props
        const { insurance, amount } = this.state

        return (
        <GuestLayout>
                <Grid className={classes.container} container spacing={1}>
                 <Card className={classes.card}>
                    <form className={classes.field} noValidate autoComplete="off">
                    <FormControl className={classes.margin}>
                        <InputLabel className={classes.txt} htmlFor="age-customized-native-simple">1. Escolha o Convênio</InputLabel>
                        <NativeSelect
                        className={classes.txt}
                        value={insurance}
                        onChange={this.handleChange('insurance')}
                        >
                        <option value="" />
                        <option value={1}>EXÉRCITO</option>
                        <option value={2}>SIAPE</option>
                        <option value={3}>GOVERNO SC</option>
                        <option value={4}>INSS</option>
                        </NativeSelect>
                    </FormControl>

                    <InputLabel className={classes.txt} htmlFor="age-customized-native-simple">2. Digite o Valor Pretendido</InputLabel>
                    
                    <CurrencyInput className={classes.input} prefix="R$" value={amount} onChangeEvent={this.handleChange('amount')}/>
                        {this.resultSimulator(classes)}         
                    </form>
                    </Card>
                </Grid>
        </GuestLayout>
        )
    }
}

export default withStyles(styles)(Simulador)