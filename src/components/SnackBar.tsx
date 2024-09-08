import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { useMyContext } from '@/app/context/MyContext';

export default function CustomizedSnackbars() {
  const {showToast, setShowToast } = useMyContext();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowToast(false);
  };

  return (
    <div>
      <Snackbar open={showToast} autoHideDuration={1200} TransitionComponent={Slide} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'right' }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Congratulations, Apply Successfully.
        </Alert>
      </Snackbar>
    </div>
  );
}