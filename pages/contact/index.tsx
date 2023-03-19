import { Button, Card, InputBase, useMantineTheme } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import Header from "components/layout/head";
import Footer from "components/pages/landing/Footer";
import { SendToSlack } from "lib/gql.client";
import Head from "next/head";
import { MainColor } from "pages";
import { MoodHappy, MoodSad } from "tabler-icons-react";
import { z } from "zod";

function ContactUs() {
  // Send message
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ["contact"],
    mutationFn: () =>
      SendToSlack({
        message: `
        🔴New Contact Form Submission: ${form.values.email}
        *Subject:* ${form.values.subject}
        *Message:* \`\`\`${form.values.message}\`\`\` `,
      }),
    onSuccess: () => {
      form.setFieldValue("email", "");
      form.setFieldValue("message", "");
      form.setFieldValue("subject", "");
      showNotification({
        title: "Thank you for contacting us!",
        message: "We will get back to you as soon as possible.",
        color: "violet",
        icon: <MoodHappy />,
      });
    },
    onError: () => {
      showNotification({
        title: "Something went wrong!",
        message: "Please try again later.",
        color: "red",
        icon: <MoodSad />,
      });
    },
  });

  // Validate form inputs
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    message: z.string().min(10, { message: "Message too short" }),
    subject: z.string().min(5, { message: "Subject too short" }),
  });
  const form = useForm({
    initialValues: {
      email: "",
      message: "",
      subject: "",
    },
    validate: zodResolver(formSchema),
  });

  const theme = useMantineTheme();
  return (
    <main className="min-h-screen">
      <Head>
        <title>Limitss | Contact us</title>
        <meta
          name="description"
          content="Contact Limitss -  If you have any questions, please contact us."
        />
      </Head>
      <Header notFixed={true} />
      <div className="flex justify-center items-center mt-20">
        <Card
          radius="xl"
          shadow={"sm"}
          className={`flex flex-col justify-evenly  items-center w-11/12 sm:w-7/12 h-[65vh] mb-[18vh] `}
        >
          <h1 className="font-semibold text-4xl">Contact us</h1>
          <form
            onSubmit={form.onSubmit(() => {
              mutateAsync().catch((err) => {});
            })}
            className="w-full  flex flex-col h-[40vh] justify-evenly items-center"
          >
            <InputBase
              classNames={{
                input: `w-[80vw]  sm:w-96 h-12  bg-[${MainColor}10]`,
              }}
              placeholder="Email..."
              rightSection={
                <div className=" w-7 h-7 mr-2 text-white text-center rounded-full bg-gradient-to-t from-violet-500 to-indigo-500">
                  <p>@</p>
                </div>
              }
              {...form.getInputProps("email")}
            />
            <InputBase
              classNames={{
                input: `w-[80vw] sm:w-96 h-12  bg-[${MainColor}10]`,
              }}
              placeholder="Subject..."
              rightSection={
                <div className=" w-7 h-7 mr-2 text-white text-center rounded-full bg-gradient-to-t from-violet-500 to-indigo-500">
                  <p>S</p>
                </div>
              }
              {...form.getInputProps("subject")}
            />
            <InputBase
              classNames={{
                input: `w-[80vw] sm:w-96 h-12  bg-[${MainColor}10]`,
              }}
              placeholder="Message..."
              rightSection={
                <div className=" w-7 h-7 mr-2 text-white text-center rounded-full bg-gradient-to-t from-violet-500 to-indigo-500">
                  <p>M</p>
                </div>
              }
              {...form.getInputProps("message")}
            />
            <div className="w-5/6 sm:w-96 flex justify-end items-center ">
              <Button
                type="submit"
                loading={isLoading}
                className="h-10 w-32 bg-gradient-to-t from-violet-500 to-indigo-500"
              >
                Send
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Footer />
    </main>
  );
}

export default ContactUs;