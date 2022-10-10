import { PasswordInput, Text, TextInput } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/head";
import { Building, Key, Mail, Sitemap, User } from "tabler-icons-react";
import PrimaryBtn from "../../components/lib/PrimaryBtn";

function SignUp() {
  return (
    <>
      <Head>
        <title>
          DesWapp Create Account and Build Desktop Apps that Users Care about
          More
        </title>
        <meta
          name="description"
          content="Build Desktop App Faster From your Webapp for Windows, MacOs, Linux, and ChoreOs. With Continues Delevery and Updates."
        ></meta>
      </Head>
      <Header minimal={true} />
      <div className="w-full flex flex-row justify-start items-center">
        <div className="sm:w-1/2 h-screen flex flex-col justify-center  px-10 sm:px-20   py-32">
          <p className="text-3xl sm:text-5xl font-bold">
            Register
            <span className="w-2 h-2  rounded-full inline-block hover:scale-150 hover:shadow-0xl bg-violet-500"></span>
          </p>
          <div className="flex my-10 ml-2">
            <Text size={"xs"} color={"dimmed"}>
              Alreday A Member?
            </Text>{" "}
            <Link href={"/login"}>
              <Text
                size={"xs"}
                className="cursor-pointer  hover:underline text-violet-500 ml-1"
              >
                Login
              </Text>
            </Link>
          </div>
            <TextInput
              className="w-[80%] "
              placeholder="Jane Doe"
              label="Full name"
              icon={<User size={14} />}
            />
          <div className="flex w-[80%] xs:w-full my-4 justify-between">
            <TextInput
              className="mr-4 "
              placeholder="Company name"
              label="Company"
              icon={<Building size={14} />}
            />
            <TextInput
            className="w-[70%]"
              placeholder="Your role"
              label="Role"
              icon={<Sitemap size={14} />}
            />
          </div>
          <TextInput
            className="w-[57%] mb-4"
            label="Email"
            type={'email'}
            placeholder="Enter your email"
            icon={<Mail size={14} />}
          />
          <PasswordInput
            styles={{visibilityToggle:{borderRadius: '50%'}}}
            label="Password"
            placeholder="Enter your password"
            className="w-[60%]"
            icon={<Key size={14} />}
          />

          <div className="flex  justify-center sm:justify-end items-center mt-8 w-[80%]">
            <PrimaryBtn onClick={()=> alert('account created')} >Register</PrimaryBtn>
          </div>
        </div>
        <div className="hidden hover:scale-y-90 transition-transform duration-700 sm:flex flex-col justify-center items-center sm:w-1/2 h-[90vh]">
          <div className="w-4/6 h-7 rotate-45 bg-violet-700 rounded-tr-full shadow-lg rounded-bl-full"></div>
          <div className="w-60 h-60 bg-violet-400 rounded-tl-full rounded-br-full"></div>
          <div className="w-3/6 h-7 rotate-45 bg-violet-300 rounded-tr-full rounded-bl-full"></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
