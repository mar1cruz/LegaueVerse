import React from "react";
import {useFormik} from "formik";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@mui/material";
import {useAppDispatch} from "../../../store/store";
import styles from "./Login.module.scss";
import {Link} from "react-router-dom";

export const Login = () => {
    const dispatch = useAppDispatch();

    // const isLoggedIn = useSelector(selectIsLoggedIn);

    const formik = useFormik({
        validate: (values) => {
            // if (!values.email) {
            //     return {
            //         email: "Email is required",
            //     };
            // }
            // if (!values.password) {
            //     return {
            //         password: "Password is required",
            //     };
            // }
        },
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        onSubmit: (values, formikHelpers) => {
            // dispatch(authThunks.login(values))
            //     .unwrap()
            //     .catch((err) => {
            //         err.fieldsErrors?.forEach(el => {
            //             formikHelpers.setFieldError(el.field, el.error)
            //         })
            //     })
        },
    });

    // if (isLoggedIn) {
    //     return <Navigate to={"/"}/>;
    // }

    return (
        <Grid container className={styles.form__container}>
            <Grid item>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        {/*<FormLabel>*/}
                        {/*    <p>*/}
                        {/*        To log in get registered{" "}*/}
                        {/*        <a href={"https://social-network.samuraijs.com/"} target={"_blank"}>*/}
                        {/*            here*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>or use common test account credentials:</p>*/}
                        {/*    <p> Email: free@samuraijs.com</p>*/}
                        {/*    <p>Password: free</p>*/}
                        {/*</FormLabel>*/}
                        <FormGroup>
                            <TextField label="Email" margin="normal" {...formik.getFieldProps("email")} />
                            {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            <TextField type="password" label="Password"
                                       margin="normal" {...formik.getFieldProps("password")} />
                            {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                            <FormControlLabel
                                label={"Remember me"}
                                control={<Checkbox {...formik.getFieldProps("rememberMe")}
                                                   checked={formik.values.rememberMe}/>}
                            />
                            <Button type={"submit"} variant={"contained"} color={"primary"}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>

                <Link to={'/'}>Регистрация</Link>
            </Grid>
        </Grid>
    );
};
