import { Grid, TextField } from '@mui/material';

interface DefaultGridProps{
    type:string,
    value:string,
    onChange: (e:any) => void,
    children:any
}

function GridItem(props:DefaultGridProps) {
    return (
        <Grid item xs={12}>
            <TextField 
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                label={props.children}
                fullWidth
            />
        </Grid>
    )
}

export default GridItem;