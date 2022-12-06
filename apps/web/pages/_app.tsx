import "../styles/globals.css";
import type { AppProps } from "next/app";
import { sayHello } from "@taeyoung/lib";

export default function App({ Component, pageProps }: AppProps) {
  sayHello();
  return <Component {...pageProps} />;
}
