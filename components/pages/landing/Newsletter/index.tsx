import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { ChevronRight, News } from "tabler-icons-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const alertN = () => {
    if (email.length > 2) {
      showNotification({
        title: "Thank you for subscribing!",
        message: "We will send you an email when we launch.",
        color: "violet",
        icon: <News />,
      });
    }
  };
  return (
    <div className="h-40 px-14 flex flex-col sm:flex-row justify-evenly sm:justify-between items-center">
      <h1 className="font-semibold text-2xl">Join the Newsletter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alertN();
        }}
        className="flex gap-3 items-center justify-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-60 pl-2 rounded-full text-sm bg-white/10"
          placeholder="Email address"
        />
        <Button
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
