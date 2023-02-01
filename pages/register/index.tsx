import { PasswordInput, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";
import { Building, Key, Mail, Sitemap, User } from "tabler-icons-react";
import { z } from "zod";
import Header from "../../components/layout/head";
import PrimaryBtn from "../../components/lib/PrimaryBtn";
// import { Register } from "../../lib/gql.client";

function SignUp() {
    const registerSchema = z.object({
        company: z.string().min(1, "Value can't be empty").max(185,'This is too long, only 185 characters allowed'),
        email: z.string().email({ message: "Invalid email" }).max(185,'Email is too long, only 185 characters allowed'),
        fullName: z.string().min(4, "Name should be atleast 4 letters").max(185,'Name is too long, only 185 characters allowed'),
        role: z.string().min(1, "Value can't be empty").max(185,'role is too long, only 185 characters allowed'),
        password: z
            .string()
            .min(8, "Password should be atleast 8 characters")
            .max(185, "Password is too long, only 185 characters allowed"),
    });

    const RegisterForm = useForm({
        initialValues: {
            company: "",
            email: "",
            fullName: "",
            role: "",
            password: "",
        },
        validate: zodResolver(registerSchema),
    });

    // const { mutateAsync } = useMutation({
    //     mutationKey: ["Register"],
    //     mutationFn: () =>
    //         Register({
    //             arg: {
    //                 company: RegisterForm.values.company,
    //                 email: RegisterForm.values.email,
    //                 fullName: RegisterForm.values.fullName,
    //                 role: RegisterForm.values.role,
    //                 password: RegisterForm.values.password,
    //             },
    //         }),
    //     onSuccess: () => alert("success"),
    // });
    return (
        <>
            <Head>
                <title>
                    Limitss Create Account and Build Desktop Apps that Users
                    Care about More
                </title>
                <meta
                    name="description"
                    content="Build Desktop App Faster From your Webapp for Windows, MacOs, Linux, and ChoreOs. With Continues Delevery and Updates."
                ></meta>
            </Head>
            <Header minimal={true} />
            <div className="w-full flex flex-row justify-start items-center">
                <form
                    // onSubmit={RegisterForm.onSubmit(() => {
                    //     mutateAsync().catch((err) => {});
                    // })}
                    className="sm:w-1/2 h-screen flex flex-col justify-center  px-10 sm:px-20   py-32"
                >
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
                        {...RegisterForm.getInputProps("fullName")}
                    />
                    <div className="flex w-[80%] xs:w-full my-4 justify-between">
                        <TextInput
                            className="mr-4 "
                            placeholder="Company name"
                            label="Company"
                            icon={<Building size={14} />}
                            {...RegisterForm.getInputProps("company")}
                        />
                        <TextInput
                            className="w-[70%]"
                            placeholder="Your role"
                            label="Role"
                            icon={<Sitemap size={14} />}
                            {...RegisterForm.getInputProps("role")}
                        />
                    </div>
                    <TextInput
                        className="w-[57%] mb-4"
                        label="Email"
                        type={"email"}
                        placeholder="Enter your email"
                        icon={<Mail size={14} />}
                        {...RegisterForm.getInputProps("email")}
                    />
                    <PasswordInput
                        styles={{ visibilityToggle: { borderRadius: "50%" } }}
                        label="Password"
                        placeholder="Enter your password"
                        className="w-[60%]"
                        icon={<Key size={14} />}
                        {...RegisterForm.getInputProps("password")}
                    />

                    <div className="flex  justify-center sm:justify-end items-center mt-8 w-[80%]">
                        <PrimaryBtn props={{ type: "submit" }}>
                            Register
                        </PrimaryBtn>
                    </div>
                </form>
                <div className="hidden sm:flex flex-col justify-center items-center sm:w-1/2 h-[90vh]">
                    <div className="w-4/6 h-7 rotate-45 bg-violet-200 rounded-tr-full shadow-lg rounded-bl-full"></div>
                    <div className="w-60 h-60 bg-fuchsia-300 rounded-tl-full rounded-br-full"></div>
                    <div className="w-3/6 h-7 rotate-45 bg-violet-300 rounded-tr-full rounded-bl-full"></div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
