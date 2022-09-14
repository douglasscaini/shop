import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";

globalStyles();

import logoImg from "../assets/logo.svg";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <Header>
                <Image src={logoImg} alt="" />
            </Header>

            <Component {...pageProps} />
        </Container>
    );
}