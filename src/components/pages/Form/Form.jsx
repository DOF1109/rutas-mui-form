import { Button, Grid, TextField, Typography } from "@mui/material"
import "./Form.css"
import { useFormik } from "formik"
import { object, string } from "yup"

const Form = () => {
    
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: object({
            name: string().required("Enter a name"),
            email: string().email().required("Enter a email"),
            password: string().required("Enter a password")
        }),
        onSubmit: (data) => {
            console.log(data);
        }
    })

    return(
        <div>
            <Typography color="primary" variant="h2" align="center" m={4}>
                Register form
            </Typography>

            <form className="form-container" onSubmit={ formik.handleSubmit }>
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
                            fullWidth
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.errors.name}
                            helperText={formik.errors.name} />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField 
                            type="email" 
                            label="Email" 
                            variant="outlined"
                            fullWidth
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.errors.email}
                            helperText={formik.errors.email} />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField 
                            type="password" 
                            label="Password" 
                            variant="outlined"
                            fullWidth
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.errors.password}
                            helperText={formik.errors.password} />
                    </Grid>

                </Grid>
                <Button type="submit" variant="contained">Send</Button>
            </form>
        </div>
    )
}

export default Form