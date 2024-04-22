import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    styleMargin: {
        marginTop: "0 auto"
    },
    small: {
        '@media (max-width: 900px)': {
            display: "block",
    }
    }
})

const Login = () => {
    return (
        <main className={css(styles.styleMargin)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button>OK</button>
        </main>
    )
}


export default Login;