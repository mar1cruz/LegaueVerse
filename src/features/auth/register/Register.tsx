import React from "react";
import {useFormik} from "formik";
import {Button, FormControl, FormGroup, Grid, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {Link, Navigate} from "react-router-dom";
import {authThunks} from "../authSlice";
import styles from './Register.module.scss'

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    general?: string;
}

export const Register = () => {
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector(state => !!state.auth.token);

    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: (values) => {
            const errors: Partial<FormValues> = {};
            if (!values.email) {
                errors.email = "Email is required";
            }
            if (!values.password) {
                errors.password = "Password is required";
            }
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords must match";
            }
            return errors;
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                await dispatch(authThunks.register({email: values.email, password: values.password})).unwrap();
            } catch (error) {
                formikHelpers.setErrors({general: "Registration failed"});
            }
        },
    });

    if (isLogged) {
        return <Navigate to="/"/>;
    }

    return (
        <Grid container className={styles.form__container}>
            <Grid item>
                <p>Registration</p>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <div style={{color: 'red'}}>{formik.errors.email}</div>
                            ) : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps("password")}
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <div style={{color: 'red'}}>{formik.errors.password}</div>
                            ) : null}
                            <TextField
                                type="password"
                                label="Confirm Password"
                                margin="normal"
                                {...formik.getFieldProps("confirmPassword")}
                            />
                            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                                <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>
                            ) : null}

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={formik.isSubmitting}
                            >
                                Register
                            </Button>

                            {formik.errors.general && (
                                <div style={{color: 'red', marginTop: '10px'}}>{formik.errors.general}</div>
                            )}
                        </FormGroup>
                    </FormControl>
                </form>

                <Link to="/login">Login</Link>
            </Grid>
        </Grid>
    );
};
