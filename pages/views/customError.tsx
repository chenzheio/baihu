import { Fragment } from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import dayjs from "dayjs";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRouter } from "next/router";
dayjs.extend(tz);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Shanghai");

interface Props {
    statusCode: number,
    message?: string,
    error?: string,
    timestamp?: string,
    path?: string,
}

const ErrorPage: NextPage<Props> = ({ error: title, statusCode, message, timestamp, path }) => {

    const router = useRouter();

    return <Fragment>
        <Head>
            <title>{title || "Error"}</title>
        </Head>
        <div className="flex justify-center items-center h-screen w-screen bg-slate-300">
            <div className="flex flex-col items-center border-1 border-gray-300 p-5 rounded-md shadow-md mb-5 bg-white">
                <div className="border-1 border-gray-300 p-5 rounded-md shadow-md mb-5">
                    <span className="text-xl font-bold">{statusCode}</span>
                    <span className="text-xl font-bold mx-5">|</span>
                    <span>{message}</span>
                </div>
                <div className="flex flex-col text-gray-300">
                    <span>请求时间: {dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")}</span>
                    <span>请求路径: {path}</span>
                    <span>返回码: {statusCode}</span>
                </div>
            </div>
        </div>
    </Fragment>
}


ErrorPage.getInitialProps = async ({ query }: NextPageContext & { query: Props }) => {
    return {
        ...query
    }
}


export default ErrorPage;