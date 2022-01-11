import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        padding: '14px 0',
        flexGrow: 1,
        backgroundColor: '#5C21AA'
    },
    content: {
        margin: '0 auto',
        width: '80%',
        lineHeight: '0'
    },
    logo: {
        width: '157px'
    }
  })
);