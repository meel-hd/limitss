import { Card, Progress, Text } from "@mantine/core";
function ProgressCard() {
    return ( 
        <Card
          w={300}
          shadow={'md'}
            radius="md"
            p="xl"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[7]
                  : theme.white,
            })}
          >
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Hourly Requests
            </Text>
            <Text size="lg" weight={500}>
              300 / 5000
            </Text>
            <Progress color={'violet'} value={4050 / 5000 * 100} mt="md" size="lg" radius="xl" />
          </Card>
     );
}

export default ProgressCard;