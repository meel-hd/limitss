import { Badge, MantineGradient, Text } from "@mantine/core";
import PrimaryBtn from "components/lib/PrimaryBtn";
import Link from "next/link";
import BuildPlatforms from "./assets/BuildPlatforms";

function AlphaRelease() {
    return (

        <section
            className="w-full min-h-screen flex justify-between overflow-hidden mt-10  items-center"
        >
            <div className="w-5/6 md:w-1/2 mx-auto">

                <h1 className="font-bold "> Limitss <Badge gradient={{ from: 'violet', to: 'cyan' }} color={'violet'} variant="gradient">Alpha</Badge></h1>
                <div className="pl-10">
                    <Text size="xl" className="font-semibold " mt={10}>
                        All power, no pain.
                    </Text>
                    <Text size="sm" mt={10} color='dimmed'>
                        Limitss allows you to build native desktop
                        apps from your webapp for Windows, Mac and Linux.
                    </Text>

                </div>
                <div className="w-full flex flex-col-reverse sm:flex-row mt-10 justify-between items-center">
                    <Link href={'/signin'}>
                        <PrimaryBtn >
                            Join Now
                        </PrimaryBtn>
                    </Link>
                    <BuildPlatforms />
                </div>
            </div>
        </section>
    );
}

export default AlphaRelease;