import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
interface ArrowsProps {
  margin?: number;
  onlyBack?: boolean;
}
function NavigationArrows({ margin, onlyBack }: ArrowsProps) {
  const router = useRouter();
  return (
    <div
      style={{ margin: margin ? margin + "px" : 0 }}
      className="flex flex-row justify-between items-center min-w-[64px]"
    >
      <ActionIcon onClick={() => router.back()}>
        <ChevronLeft />
      </ActionIcon>
      {!onlyBack && (
        <ActionIcon>
          <ChevronRight />
        </ActionIcon>
      )}
    </div>
  );
}

export default NavigationArrows;
