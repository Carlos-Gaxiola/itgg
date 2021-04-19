import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import Axios from 'axios'
import CarousellITG from './CarouselITG'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide(props) {
    var firstOpen = props.firstOpen;
    const [eliminado, setEliminado] = useState(false)
    const [open, setOpen] = useState(props.open);
    
    useEffect(() => {
        handleClickOpen()
    }, [props.actualId, firstOpen])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleEliminar = () => {
        Axios.get('http://localhost:3000/deleteCarousell/' + props.actualId, {
        }).then(() => {
            setEliminado(true)
            handleClose()
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        ¿Desea eliminar esta imagen?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                </Button>
                    <Button onClick={handleEliminar} color="primary">
                        Si
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
