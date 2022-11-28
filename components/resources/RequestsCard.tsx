import { Badge, createStyles, Group, Paper, Progress, Text, ThemeIcon } from '@mantine/core';
import { GitPullRequest } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
    boxShadow: theme.shadows.md,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));
export  function RequestsCard() {
  const { classes } = useStyles();
  const consumedRequests = 2000;
  return (
    <Paper radius="md" shadow={'xs'}  className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon color={'violet'} className={classes.icon}  size={ICON_SIZE} radius={ICON_SIZE}>
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
          {consumedRequests / 5000 * 100}%
        </Text>
      </Group>

      <Progress color={'violet'} value={consumedRequests / 5000 * 100} mt={5} />

      <Group position="apart" mt="md">
        <Text size="sm">{consumedRequests} / 5000 req</Text>
        <Badge color={'violet'} size="sm">4 minutes left</Badge>
      </Group>
    </Paper>
  );
}