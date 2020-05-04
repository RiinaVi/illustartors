import React from "react";
import {NextPage} from "next";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const ErrorPage:NextPage = () => (
    <Layout>
        <div>404 error</div>
        <div><Link href={'/'}><a>Main page</a></Link></div>
    </Layout>
)

export default ErrorPage;