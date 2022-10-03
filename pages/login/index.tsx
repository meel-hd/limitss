import { Button, PasswordInput, Text, TextInput } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { Key, Mail } from "tabler-icons-react";
function Login() {
  return (
    <>
      <Head>
        <title>DesWapp Log In to your Account and Manage your Apps</title>
        <meta
          name="description"
          content="Login to DesWapp and Manage your Desktop App From The Dashboard."
        ></meta>
      </Head>
      <div className="w-full flex flex-row justify-start items-center">
        <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center px-20 py-32">
          <p className="text-3xl sm:text-5xl font-semibold">
            Login to account
            <span className="w-2 h-2 rounded-full inline-block bg-violet-500"></span>
          </p>
          <div className="flex my-10 ml-2">
            <Text size={"xs"} color={"dimmed"}>
              {"Don't have account?"}
            </Text>{" "}
            <Link href={"/signup"}>
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
          />
          <PasswordInput
            className="w-[80%]"
            label="Password"
            placeholder="Enter password"
            icon={<Key size={14} />}
          />

          <div className="flex justify-center sm:justify-end items-center mt-6 w-[80%]">
            <Button>Enter Account</Button>
          </div>
        </div>
        <div className="hidden  hover:scale-y-75 transition-transform duration-700 sm:flex flex-col justify-center items-center sm:w-1/2 h-[90vh]">
          <div className="w-5/6 h-7 rotate-45 bg-violet-700 rounded-tr-full shadow-lg rounded-bl-full"></div>
          <div className="w-60 h-60 bg-violet-400 rounded-tl-full rounded-br-full"></div>
          <div className="w-3/6 h-7 rotate-45 bg-violet-300 rounded-tr-full rounded-bl-full"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
