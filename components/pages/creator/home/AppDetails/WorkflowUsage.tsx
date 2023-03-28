import {
  Center,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  BrandApple,
  BrandUbuntu,
  BrandWindows,
  Icon,
} from "tabler-icons-react";
import millisToMinutesAndSeconds from "./utils/msToMin";
interface StatsRingProps {
  label: "Ubuntu" | "MacOS" | "Windows";
  ms: string;
  color: string;
}
export function WorkflowUsage(usage) {
  const theme = useMantineTheme();
  const statsData: StatsRingProps[] = usage?.usage?.billable?.UBUNTU !== undefined ? [
    {
      label: "Ubuntu",
      ms: usage.usage.billable.UBUNTU.total_ms,
      color: theme.colors.pink[7],
    },
    {
      label: "MacOS",
      ms: usage.usage.billable.MACOS.total_ms,
      color: theme.colors.gray[5],
    },
    {
      label: "Windows",
      ms: usage.usage.billable.WINDOWS.total_ms,
      color: theme.colors.blue[5],
    },
  ] : [];
  const brandIcons = {
    ubuntu: BrandUbuntu,
    windows: BrandWindows,
    macos: BrandApple,
  };
  const stats = statsData.map((stat) => {
    const Icon: Icon = brandIcons[stat.label.toLowerCase()];
    return (
      <Paper shadow={"xs"} radius="md" p="xs" key={stat.label}>
        <Group>
          <Center>
            <Icon color={stat.color} size={22} />
          </Center>

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={700} size="lg">
              {millisToMinutesAndSeconds(stat.ms)+"  "}
              Min
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        {stats}
        {stats.length === 0 && <Text size={'sm'} color={'dimmed'}>No usage data available</Text>}
      </SimpleGrid>
    
  );
}
