import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function FormDialog({modal, error, setModal, title, description, children, primaryButton, handlePrimaryAction, secondaryButton, handleSecondaryAction, loading}) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (modal.hasOwnProperty('show')) {
      setOpen(modal.show);
    }    
  }, [modal])

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setModal({show : false, name : ''});
    handleSecondaryAction();
  }

  return (
    <div>      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {loading && <LinearProgress />}
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText style={error?{color:'red'}:null}>
            {description}
          </DialogContentText>
            {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {secondaryButton}
          </Button>
          {primaryButton && <Button onClick={handlePrimaryAction} color="primary">
            {primaryButton}
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}