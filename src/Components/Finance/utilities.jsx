import React from 'react'
import Grid from '@material-ui/core/Grid';
import { ArrowDownward, MonetizationOn, CalendarToday, Computer, PersonPin, Pageview, AttachMoney } from '@material-ui/icons';

export function BackgroundImg(gridStyle, gridBreakpoint, titleStyle, subTitleStyle) {
    const title = 'O que é empréstimo consignado privado?'
    const subtitle1 = 'É o jeito mais fácil e rápido de conseguir um empréstimo. Nesse modelo de crédito, as parcelas são descontadas diretamente da folha de pagamento do funcionário. Com o risco menor, o empréstimo consignado privado é uma opção de crédito pessoal com a menor taxa de juros do mercado.'
    const subtitle2 = 'Na Lira Financeira, temos o objetivo de reduzir o superendividamento da população brasileira. Oferecemos uma taxa justa para você realizar os seus sonhos ou quitar dívidas mais caras, como cheque especial, empréstimo pessoal e juros do cartão de crédito. Tudo isso, de forma simples e transparente!'

    return (
        <div className="container p-l-md p-r-md">
            <Grid className={gridStyle} container spacing={3}>
            <Grid className={gridBreakpoint} item xs={6}>
                <div className={titleStyle}>{title}</div>
                <h3 className={subTitleStyle}>{subtitle1}</h3>
                <h3 className={subTitleStyle}>{subtitle2}</h3>
            </Grid>
            <Grid className={gridBreakpoint} item xs={6}>
                <img src="/assets/img/consignado.png" />
            </Grid>
            </Grid>
        </div>
    )
}

export function Banner(title, description) {
    return (
            <div>
                <div className="tile is-ancestor">
                    <div className="tile">
                        <article style={{padding: 80, backgroundColor: '#225dab'}} className="tile is-child notification is-primary">
                            <p style={{textAlign: 'center'}} className="title">{title}</p>
                            <p style={{fontSize: 20, marginTop: 3, textAlign: 'center'}} className="subtitle">{description}</p>
                        </article>
                    </div>
              </div>
            </div>
    )

}

export function About(gridBreakpoint) {
    return (
            <Grid style={{padding: 30, flexGrow: 1}} container spacing={3}>
                <Grid item xs={12}>
                        <article style={{padding: 80, backgroundColor: '#fff'}} className="tile is-child notification is-primary">
                            <p style={{textAlign: 'center', color: '#000'}} className="title">Escolha o melhor crédito do mercado,</p>
                            <p style={{textAlign: 'center', color: '#000'}} className="title">com taxa a partir de 1,29% ao mês</p>
                            <p style={{fontSize: 20, marginTop: 3, textAlign: 'center'}} className="subtitle">aa</p> 
                        </article>
                </Grid>
                        <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={4}>
                            <ArrowDownward style={{color: '#225dab', fontSize: '3em'}} /> 
                            <h3 style={{fontSize: 18}}>Nos comprometemos a oferecer a menor taxa do mercado para você realizar seus sonhos.</h3>
                        </Grid>

                        <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={4}>
                            <MonetizationOn style={{color: '#225dab', fontSize: '3em'}} />
                            <h3 style={{fontSize: 18}}>Para o seu controle financeiro, as parcelas mensais não ultrapassam 30% do seu salário.</h3>
                        </Grid>

                        <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={4}>
                            <CalendarToday style={{color: '#225dab', fontSize: '3em'}} />
                            <h3 style={{fontSize: 18}}>Todo mês, as parcelas serão descontadas diretamente da sua folha de pagamento.</h3>
                        </Grid>        
                </Grid>
    )
}

export function Process(gridBreakpoint) {
    return (
        <Grid style={{padding: 30, flexGrow: 1}} container spacing={3}>
            <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={12}>
                <h1 style={{fontWeight: 500, fontSize: 30}}>Como é o processo na Lira Financeira?</h1>
            </Grid>
            <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={6}>
                <Computer style={{color: '#225dab', fontSize: '5em'}} /> 
                <h1 style={{fontWeight: 'bold', fontSize: 26}}>Cadastro</h1>
                <h3 style={{fontSize: 18, padding: 50}}>Cadastre-se e dê o primeiro passo para ter acesso ao crédito mais barato do mercado em poucos cliques.</h3>
            </Grid>

            <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={6}>
                <PersonPin style={{color: '#225dab', fontSize: '5em'}} /> 
                <h1 style={{fontWeight: 'bold', fontSize: 26}}>Parceria</h1>
                <h3 style={{fontSize: 18, padding: 50}}>Juntamente com o RH da sua empresa, fazemos uma parceria para trazer a melhor opção de crédito para você.</h3>
            </Grid>

            <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={6}>
                <Pageview style={{color: '#225dab', fontSize: '5em'}} /> 
                <h1 style={{fontWeight: 'bold', fontSize: 26}}>Análise</h1>
                <h3 style={{fontSize: 18, padding: 50}}>Aguarde a análise de crédito para ter acesso ao empréstimo com a menor taxa do mercado.</h3>
            </Grid>

            <Grid className={gridBreakpoint} style={{padding: 20, textAlign: 'center'}} item xs={6}>
                <AttachMoney style={{color: '#225dab', fontSize: '5em'}} /> 
                <h1 style={{fontWeight: 'bold', fontSize: 26}}>Liberação de crédito</h1>
                <h3 style={{fontSize: 18, padding: 50}}>Após a aprovação do crédito, o valor será disponibilizado em sua conta bancária em até 24 horas.</h3>
            </Grid>
        </Grid>
    )
}