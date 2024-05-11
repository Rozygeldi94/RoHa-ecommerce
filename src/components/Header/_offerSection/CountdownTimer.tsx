import { useCountdown } from "@/hooks/useCountDown";
import { ExpiredNotice } from "./ExpiredNotice";
import { ShowCounter } from "./ShowCounter";

export const CountdownTimer = ({
  targetDate,
}: {
  targetDate: number | undefined;
}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
