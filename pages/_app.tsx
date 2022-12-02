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
import { SessionProvider } from "next-auth/react";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+b", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
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
                  input:
                    "border-2 focus:border-indigo-400 focus:shadow-sm rounded-full",
                },
              },
              Button: {
                classNames: {
                  root: "rounded-full",
                },
              },
            },
            loader: "bars",
          }}
          >
          <ModalsProvider>
          <NotificationsProvider>
            <QueryClientProvider client={queryClient}>
              <SessionProvider session={session}>
                <Component {...pageProps} />
              </SessionProvider>
            </QueryClientProvider>
          </NotificationsProvider>
      </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
