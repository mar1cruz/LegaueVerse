import React from "react";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {Link, Navigate} from "react-router-dom";
import {authThunks} from "../authSlice";
import styles from './../Auth.module.scss'

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
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = "Password is required";
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Field is required";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords must match";
            }

            return errors;
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                await dispatch(authThunks.register({email: values.email, password: values.password}))
                    .unwrap()
                    .catch((err) => {
                        err.response?.data?.forEach((el: any) => {
                            formikHelpers.setFieldError(el, el[0])
                        })
                    })
            } catch (error) {
                formikHelpers.setErrors({general: "Registration failed"});
            }
        },
    });

    if (isLogged) {
        return <Navigate to="/"/>;
    }


    return (
        <div className={styles.auth__container}>
            <div>
                <p className={styles.auth__title}>Registration or <Link className={styles.auth__link}
                                                                       to={'/login'}>Login</Link></p>
            </div>
            <form className={styles.form} onSubmit={formik.handleSubmit} noValidate={true}>

                <label>
                    <input {...formik.getFieldProps("email")}
                           type="email"
                           placeholder="Email"/>

                    {formik.errors.email && formik.touched.email &&
                        <div className={styles.error}>{formik.errors.email}</div>}
                </label>

                <label>
                    <input {...formik.getFieldProps("password")}
                           type="password"
                           placeholder="Password"/>

                    {formik.errors.password && formik.touched.password &&
                        <div className={styles.error}>{formik.errors.password}</div>}
                </label>

                <label>
                    <input {...formik.getFieldProps("confirmPassword")}
                           type="password"
                           placeholder="Confirm password"/>

                    {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                        <div className={styles.error}>{formik.errors.confirmPassword}</div>}
                </label>

                <button className={styles.form__button} disabled={formik.isSubmitting} type='submit'>Login</button>

                {formik.errors.general && (
                    <div style={{color: 'red', marginTop: '10px'}}>{formik.errors.general}</div>
                )}

            </form>
        </div>
    );
};
