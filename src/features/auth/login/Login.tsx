import React from "react";
import {useFormik} from "formik";
import {Button, FormControl, FormGroup, Grid, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import styles from "./Login.module.scss";
import {Link, Navigate} from "react-router-dom";
import {authThunks} from "../authSlice";

interface FormValues {
    email: string;
    password: string;
    general?: string;
}

export const Login = () => {
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector(state => !!state.auth.token);

    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors: Partial<FormValues> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = "Password is required";
            }
            return errors;
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                await dispatch(authThunks.login(values)).unwrap();
            } catch (error) {
                formikHelpers.setErrors({general: "Invalid email or password"});
            }
        },
    });

    if (isLogged) {
        return <Navigate to="/"/>;
    }

    return (
        <Grid container className={styles.form__container}>
            <Grid item>
                <p>Authorization</p>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField label="Email" margin="normal" {...formik.getFieldProps("email")} />
                            {formik.errors.email && formik.touched.email
                                && <div style={{color: 'red'}}>{formik.errors.email}</div>}

                            <TextField type="password" label="Password"
                                       margin="normal" {...formik.getFieldProps("password")} />
                            {formik.errors.password && formik.touched.password
                                && <div style={{color: 'red'}}>{formik.errors.password}</div>}

                            <Button type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={formik.isSubmitting}>
                                Login
                            </Button>


                            <Link to={'/register'}>Register</Link>

                            {formik.errors.general && (
                                <div style={{color: 'red', marginTop: '10px'}}>{formik.errors.general}</div>
                            )}

                        </FormGroup>
                    </FormControl>
                </form>

            </Grid>
        </Grid>
    );
};
