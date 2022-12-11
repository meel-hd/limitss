import {
  Badge,
  createStyles,
  Group,
  Loader,
  Paper,
  Progress,
  Text,
  ThemeIcon
} from "@mantine/core";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { GitPullRequest } from "tabler-icons-react";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
    boxShadow: theme.shadows.md,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));
export function RequestsCard() {
  const { classes } = useStyles();
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get("/api/github/rate")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Paper
      radius="md"
      shadow={"xs"}
      className={classes.card + ' mx-2 sm:mx-0'}
      mt={ICON_SIZE / 3}
    >
      {data ? (
        <>
          <ThemeIcon
            color={"violet"}
            className={classes.icon}
            size={ICON_SIZE}
            radius={ICON_SIZE}
          >
            <GitPullRequest size={34} />
          </ThemeIcon>
          <Text align="center" weight={700} className={classes.title}>
            Hourly Requests
          </Text>
          <Group position="apart" mt="xs">
            <Text size="sm" color="dimmed">
              Consumed
            </Text>
            <Text size="sm" color="dimmed">
              {Math.round((data.resources.core.used / data.resources.core.limit) * 100)}%
            </Text>
          </Group>
          <Progress
            color={"violet"}
            value={(data.resources.core.used / 5000) * 100}
            mt={5}
          />
          <Group position="apart" mt="md">
            <Text size="sm">
              {data.resources.core.used} / {data.resources.core.limit} req
            </Text>
            <Badge color={"violet"} size="sm">
              {`${dayjs(data.resources.core.reset * 1000).diff(
                dayjs(),
                "minute"
              )} min remaining`}
            </Badge>
          </Group>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <Loader color={"violet"} variant="oval" />
        </div>
      )}
    </Paper>
  );
}
