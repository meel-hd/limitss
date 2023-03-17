import { Button } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import { JoinNewsletter } from "lib/gql.client";
import { useState } from "react";
import { ChevronRight, News } from "tabler-icons-react";
import { z } from "zod";

function Newsletter() {
  // Mutation to join the newsletter
  const {mutateAsync, isLoading} = useMutation({
    mutationKey: ["JoinNewsletter"],
    mutationFn: () => JoinNewsletter({email: newsletterForm.values.email}),
    onSuccess: () => {
      // clear the input field
      newsletterForm.setFieldValue("email", "");
      showNotification({
        title: "Thank you for subscribing!",
        message: "We will send you an email when we launch.",
        color: "violet",
        icon: <News />,
      });
    },
    onError: () => {
      showNotification({
        title: "Something went wrong!",
        message: "Please try again later.",
        color: "red",
        icon: <News />,
      });
    },
  })
  // Input validation
  const inputSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
  })
  const newsletterForm = useForm({
    initialValues: {
      email: "",
    },
    validate: zodResolver(inputSchema),
  })
  return (
    <div className="h-40 px-14 flex flex-col sm:flex-row justify-evenly sm:justify-between items-center">
      <h1 className="font-semibold text-2xl">Join the Newsletter</h1>
      <form
        onSubmit={newsletterForm.onSubmit(() => {
          mutateAsync().catch((err) => {});
        })
        }
        className="flex gap-3 items-center justify-center"
      >
        <input
          type="email"
          className="h-12 w-60 pl-2 rounded-full text-sm bg-white/10"
          placeholder="Email address"
          {...newsletterForm.getInputProps("email")}
        />
        <Button
          loading={isLoading}
          type="submit"
          className="w-14 h-14 bg-gradient-to-r  from-indigo-500 to-violet-400 hover:shadow-0xl"
        >
          <ChevronRight />
        </Button>
      </form>
    </div>
  );
}

export default Newsletter;
