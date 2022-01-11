import { AppBar } from '@material-ui/core';

import { useStyles } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.container} position='static'>
            <div className={classes.content}>
                <img className={classes.logo} src={logoImg} alt="Logo Sensedia" />
            </div>
        </AppBar>
    );
}