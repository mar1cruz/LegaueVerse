import React from "react";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import styles from "../Auth.module.scss";
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
        <div className={styles.auth__container}>
            <div>
                <p className={styles.auth__title}>Authorization or <Link className={styles.auth__link} to={'/register'}>Register</Link></p>
            </div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>

                <label>
                    <input {...formik.getFieldProps("email")}
                           className={styles.field__email}
                           type="email"
                           placeholder="Email"/>

                    {formik.errors.email && formik.touched.email &&
                        <div className={styles.error}>{formik.errors.email}</div>}
                </label>

                <label>
                    <input {...formik.getFieldProps("password")}
                           className={styles.field__password}
                           type="password"
                           placeholder="Password"/>

                    {formik.errors.password && formik.touched.password &&
                        <div className={styles.error}>{formik.errors.password}</div>}
                </label>

                <button className={styles.form__button} disabled={formik.isSubmitting}>Login</button>

                {formik.errors.general && (
                    <div style={{color: 'red', marginTop: '10px'}}>{formik.errors.general}</div>
                )}

            </form>
        </div>
    );
};
