import React, { CSSProperties, FunctionComponent } from 'react';

// Components
import Link from 'next/link';
import Head from 'next/head';
import Button from '@Components/Controls/Button';

// Styles
const ErrorStyle: {
    [key: string]: CSSProperties;
} = {
    error: {
        margin: '0px',
        display: 'flex',
        padding: '80px 40px',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    errorImg: {
        maxWidth: '100%',
        marginBottom: 'var(--space-24)',
    },
    errorTitle: {
        fontSize: '48px',
        fontWeight: 'bold',
        lineHeight: '50px',
        color: 'var(--blue)',
        marginBottom: 'var(--space-24)',
    },
    errorDescription: {
        lineHeight: '18px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: 'var(--black-1)',
        fontSize: 'var(--medium)',
        marginBottom: 'var(--space-24)',
    },
};

interface Page404Props {}

const Page404: FunctionComponent<Page404Props> = () => {
    return (
        <div style={ErrorStyle.error}>
            <Head>
                <title>Không tìm thấy nội dung!</title>
            </Head>

            <img style={ErrorStyle.errorImg} src={'/assets/error/404.svg'} />

            <h1 style={ErrorStyle.errorTitle}>Không tìm thấy nội dung!</h1>

            <div style={ErrorStyle.errorDescription}>Lỗi máy chủ 500. Nhân viên của chúng tôi đã được thông báo, cảm ơn bạn đã hiểu.</div>

            <Link href={'/'}>
                <Button>VỀ TRANG CHỦ</Button>
            </Link>
        </div>
    );
};

export default Page404;
