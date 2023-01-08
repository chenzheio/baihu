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
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: 460,
                    maxWidth: "80vw",
                    minWidth: 200,
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        padding: 10,
                        borderRadius: 5,
                        boxShadow: '5px 5px 5px #ccc',
                        marginBottom: 20
                    }}
                >
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{statusCode}</span>
                    <span style={{ marginLeft: 5, marginRight: 5, fontSize: '3rem', }}>|</span>
                    <span>{message}</span>

                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#ccc',
                    }}
                >
                    <span>请求时间: {dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")}</span>
                    <span>请求路径: {path}</span>
                    <span>返回码: {statusCode}</span>

                    <button
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            padding: 5,
                            borderRadius: 5,
                            marginTop: 10
                        }}
                        onClick={() => router.back()}
                    >
                        返回
                    </button>
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