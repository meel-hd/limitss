import { Button, Center } from "@mantine/core";
import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Footer from "components/pages/home/Footer";
import GameCard from "components/pages/home/GameCard";
import Header from "components/pages/home/Header";

function Home() {
  return (
    <AuthorizedOnly>
      <Header />
      <main className="p-2 mt-2">
        <h1 className="font-semibold ml-5 sm:ml-16">All games</h1>
        <section className="mt-2 ml-5 sm:ml-16 flex justify-center sm:justify-start flex-wrap items-center gap-10 ">
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
          <GameCard marginTop={14} />
        </section>
        <Center my={25}>
          <Button color={"violet"} size="xs" variant="white">
            Show more
          </Button>
        </Center>
      </main>
      <Footer />
    </AuthorizedOnly>
  );
}

export default Home;
