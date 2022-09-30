import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import Logo from "../../components/head/lib/Logo";
function Login() {
    return ( <>
        <div className="w-full h-screen flex py-9 flex-col justify-center items-center">
          <Card
            pb={20}
            shadow={"sm"}
            className="h-4/6 w-1/2 min-w-[280px] min-h-[400px] flex flex-col justify-between items-center"
          >
            <div>
              <Logo width={50} textSize={30} />
              <h1 className="text-3xl text-center font-bold">Log In</h1>
            </div>
            <div className="w-full p-11 flex flex-col justify-center items-center">
              <TextInput
                type={"email"}
                autoFocus
                label="Email"
                placeholder="Your Email"
                className=" w-4/6 mb-5 min-w-[230px]"
              />
              <PasswordInput
                autoComplete="off"
                styles={{ visibilityToggle:{borderRadius:'50%'}}}
                label="Password"
                placeholder="Enter your password"
                className="w-4/6 focus:shadow-md outline-indigo-400 min-w-[230px]"
              />
              <Button className="bg-violet-500 mt-14 w-32 hover:bg-violet-500">
                Log In
              </Button>
            </div>
          </Card>
        </div></> );
}

export default Login;