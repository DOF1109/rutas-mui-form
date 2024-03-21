import { Button, Grid, TextField, Typography } from "@mui/material"
import "./Form.css"

const Form = () => {
    return(
        <div>
            <Typography color="primary" variant="h2" align="center">
                Register form
            </Typography>
            
            <form className="form-container">
                <Grid 
                    container 
                    alignItems="center" 
                    justifyContent="space-evenly"
                    spacing={2}
                    sx={{ width:"100%" }}
                >

                    <Grid item xs={12} md={7}>
                        <TextField 
                            type="text" 
                            label="Name" 
                            variant="outlined"
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField 
                            type="email" 
                            label="Email" 
                            variant="outlined"
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField 
                            type="password" 
                            label="Password" 
                            variant="outlined"
                            fullWidth />
                    </Grid>

                </Grid>
                <Button type="submit" variant="contained">Send</Button>
            </form>
        </div>
    )
}

export default Form