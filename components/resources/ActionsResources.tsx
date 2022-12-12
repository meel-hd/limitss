import {
  Card,
  createStyles,
  Loader,
  Text,
  Progress,
  Paper,
  Center,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrandApple, BrandUbuntu, BrandWindows } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.fn.rgba(theme.white, 0.65),
  },

  stats: {
    color: theme.white,
  },

  progressBar: {
    backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.lg,
    color: theme.colors[theme.primaryColor][6],
  },

  label: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  count: {
    color: theme.colors.gray[6],
  },
}));

function ActionsResources() {
  const [data, setData] = useState<any>();
  const { classes } = useStyles();
  useEffect(() => {
    axios
      .get("/api/github/rate/actions")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Card withBorder radius="md" p="xl" className="bg-violet-400/80 mx-2 sm:mx-0">
      {data ? (
        <>
          <Text
            size="xs"
            transform="uppercase"
            weight={700}
            className={classes.title}
          >
            Build Resources per Month
          </Text>
          <Text size="lg" weight={500} className={classes.stats}>
            {data?.total_minutes_used} <span className="text-xs">used </span>/{" "}
            {data?.included_minutes} Minutes 
          </Text>
          <Progress
            value={(data?.total_minutes_used / data?.included_minutes) * 100}
            mt="md"
            size="lg"
            radius="xl"
            classNames={{
              root: classes.progressTrack,
              bar: classes.progressBar,
            }}
          />
          <div className="flex justify-around items-center mt-5">
            <Paper radius="md" shadow="md" p="xs">
              <Center>
                <BrandApple size={20} color="#A2AAAD" />
              </Center>
              <div>
                <Text className={classes.label}>MacOs</Text>
                <Text size="xs" className={classes.count}>
                  {data?.minutes_used_breakdown.MACOS} Mins
                </Text>
              </div>
            </Paper>
            <Paper radius="md" shadow="md" p="xs">
              <Center>
                <BrandWindows size={20} color="#0078d8" />
              </Center>
              <div>
                <Text className={classes.label}>Windows</Text>
                <Text size="xs" className={classes.count}>
                  {data?.minutes_used_breakdown.WINDOWS} Mins
                </Text>
              </div>
            </Paper>
            <Paper radius="md" shadow="md" p="xs">
              <Center>
                <BrandUbuntu size={20} color="purple" />
              </Center>
              <div>
                <Text className={classes.label}>UBUNTU</Text>
                <Text size="xs" className={classes.count}>
                  {data?.minutes_used_breakdown.UBUNTU} Mins
                </Text>
              </div>
            </Paper>
          </div>
          <Text size={'xs'} color='white' mt={10}>
            No builds will complete if the limit is exceeded.
          </Text>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <Loader color={"white"} variant="oval" />
        </div>
      )}
    </Card>
  );
}

export default ActionsResources;
