import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  value: number; // 0 - 100
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <Progress.Root
      value={value}
      className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200"
    >
      <Progress.Indicator
        className="h-full bg-[var(--primary-color)] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${100 - 40}%)` }}
      />
    </Progress.Root>
  );
}
