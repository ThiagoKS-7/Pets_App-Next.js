import { Dialog,DialogActions, Button, Grid } from '@mui/material'
import GridItem from '../GridItem/GridItem';

interface DefaultModalProps{
    firstField: string;
    firstValue: string;
    firstOnChange: (e:any) => void;
    secondField?: string;
    secondValue?: string;
    secondOnChange?: (e:any) => void;
    cancel: string;
    confirm: string;
    open: any;
    onClose: () => void;
    onConfirm: () => void;
    onCancel: () => void;
}


/* MOLECULES */
function ModalBody(props: any) {
    return(
        <Grid container spacing={2}>
            <GridItem type={'email'} value={props.firstValue} onChange={props.firstOnChange}>
                {props.firstField}
            </GridItem>
            <GridItem type={'number'} value={props.secondValue} onChange={props.secondOnChange}>
                {props.secondField}
            </GridItem>
        </Grid>
    )
}

function ModalFooter(props:any) {
    return(
        <DialogActions sx={{mt: 5}}>
            <Button onClick={props.onCancel} color={'secondary'}>
                {props.cancel}
            </Button>
            <Button onClick={props.onConfirm} variant={'contained'}>
                {props.confirm}
            </Button>
        </DialogActions>
    )
}

export default function DefaultModal(props:DefaultModalProps) {
    return (
        <Dialog open={props.open}  onClose={props.onClose} fullWidth PaperProps={{sx:{p:5}}}>
            <ModalBody 
                firstField={props.firstField}
                firstValue={props.firstValue}
                firstOnChange={props.firstOnChange}
                secondField={props.secondField}
                secondValue={props.secondValue}
                secondOnChange={props.secondOnChange}
            />
            <ModalFooter onCancel={props.onCancel} cancel={props.cancel} onConfirm={props.onConfirm} confirm={props.confirm}/>
        </Dialog>
    )
}