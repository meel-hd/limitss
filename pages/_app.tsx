import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/gql.client";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: colorScheme,
            // fontFamily:"robot",
            components: {
              Input: {
                defaultProps: {
                  autoComplete: "off",
                },
                classNames: {
                  input: "border-2 focus:border-indigo-400 focus:shadow-md rounded-full",
                },
              },
              Button: {
                classNames: {
                  root: "rounded-full",
                },
              },
            },
            loader: 'bars' 
          }}
        >
          <QueryClientProvider client={queryClient}>
            
          <Component {...pageProps} />
          </QueryClientProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
