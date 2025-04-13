import { makeStyles } from '@mui/styles';  // Correct import for makeStyles

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),  // theme.spacing should be a function
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

export default useStyles;
