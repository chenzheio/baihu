import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
    message?: string
}

const Home: NextPage<Props> = ({ message }) => {
    const greetName = message || 'Hi, there!';

    return (
        <div className='flex w-screen h-screen justify-center items-center text-lime-800 text-lg'>
            <div>{greetName}</div>
        </div>
    );
};

export async function getServerSideProps(ctx: NextPageContext) {
    return { props: { message: ctx.query.message || null } };
}

export default Home;
