import "../styles/globals.css";
import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
};

export default MyApp;