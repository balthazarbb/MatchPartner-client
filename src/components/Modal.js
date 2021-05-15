import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {onAdd} = this.props
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        create new match
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id="transition-modal-title">Transition modal</div>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <form onSubmit={onAdd} >
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Type of Sports" variant="outlined" />
            <TextField id="outlined-basic" label="Date & Time" variant="outlined" />
            <TextField id="outlined-basic" label="Number of players" variant="outlined" />
            <TextField id="outlined-basic" label="special Equipment" variant="outlined" /> 
            <Button type='submit' variant="contained" color="primary" href="#contained-buttons">
            Find Matchpartners
            </Button> 
            </form>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default TransitionsModal