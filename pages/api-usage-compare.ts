// @ts-check
import { setSeconds, setMinutes, setMilliseconds, isBefore } from "date-fns";
import { Dayjs } from "dayjs";
import { DateTime } from "luxon";

function checkIsBeforeDateFns(time: Date, maxTime: Date) {
  return isBefore(
    setMilliseconds(setSeconds(setMinutes(time, 0), 0), 0),
    maxTime
  );
}

function checkIsBeforeDayjs(time: Dayjs, maxTime: Dayjs) {
  return time.minute(0).second(0).millisecond(0).isBefore(maxTime);
}

function checkIsBeforeLuxon(time: DateTime, maxTime: DateTime) {
  return time.set({ second: 0, minute: 0, millisecond: 0 }) < maxTime;
}

