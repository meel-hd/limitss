import { PasswordInput, Text, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Key, Mail } from "tabler-icons-react";
import Header from "../../components/head";
import PrimaryBtn from "../../components/lib/PrimaryBtn";
import { Login as LoginMutation } from "../../lib/gql.client";
import Notification from "../../components/lib/notifications";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    // Try to login
    const { isLoading, mutateAsync } = useMutation({
        mutationKey: ["CreateApp"],
        mutationFn: () =>
            LoginMutation({
                arg: {
                    email,
                    password,
                },
            }),
        onSuccess: () => {
            // Redirect to main page
            router.replace("/setup");
        },
        onError: () => {
            // Show the Error notificatin
            setError(true);
        },
    });


    // Hide the error notifaction after 4 seconds
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 4000);
        }
    }, [error]);

    return (
        <>
            <Head>
                <title>
                    DesWapp Log In to your Account and Manage your Apps
                </title>
                <meta
                    name="description"
                    content="Login to DesWapp and Manage your Desktop App From The Dashboard."
                ></meta>
            </Head>
            <Header minimal={true} />
            <div className="w-full flex flex-row justify-start items-center">
                <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center sm:items-start px-10 sm:px-20 py-32">
                    <p className="text-3xl sm:text-5xl font-bold">
                        Log In
                        <span className="w-2 h-2 hover:scale-150  hover:shadow-0xl rounded-full inline-block bg-violet-500"></span>
                    </p>
                    <div className="flex my-10 ml-2">
                        <Text size={"xs"} color={"dimmed"}>
                            {"Don't have account?"}
                        </Text>{" "}
                        <Link href={"/register"}>
                            <Text
                                size={"xs"}
                                className="cursor-pointer hover:underline text-violet-500 ml-1"
                            >
                                Register
                            </Text>
                        </Link>
                    </div>
                    <TextInput
                        className="w-[80%] mb-4"
                        label="Email"
                        placeholder="Enter your email"
                        icon={<Mail size={14} />}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PasswordInput
                        styles={{ visibilityToggle: { borderRadius: "50%" } }}
                        label="Password"
                        placeholder="Enter your password"
                        className="w-[80%]"
                        icon={<Key size={14} />}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="flex justify-center sm:justify-end items-center mt-6 w-[80%]">
                        <PrimaryBtn
                            loading={isLoading}
                            onClick={() => {
                                mutateAsync().catch((err) => {
                                    // alert(err)
                                });
                            }}
                        >
                            Log In
                        </PrimaryBtn>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col justify-center items-center sm:w-1/2 h-[90vh]">
                    <div className="w-4/6 h-7 rotate-45 bg-violet-200 rounded-tr-full shadow-lg rounded-bl-full"></div>
                    <div className="w-60 h-60 bg-fuchsia-300 rounded-tl-full rounded-br-full"></div>
                    <div className="w-3/6 h-7 rotate-45 bg-violet-300 rounded-tr-full rounded-bl-full"></div>
                </div>
            </div>
            {error && (
                <Notification
                    title="Login Error"
                    message="Invalid Email or password"
                    color="red"
                />
            )}
        </>
    );
}

export default Login;
