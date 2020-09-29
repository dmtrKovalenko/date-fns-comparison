// @ts-check

import dayjs from "dayjs";
import relativePlugin from 'dayjs/plugin/relativeTime'

import "dayjs/locale/ru";
import "dayjs/locale/en";
import "dayjs/locale/zh-cn";

dayjs.extend(relativePlugin)

dayjs().locale("ru").format("mm/dd");
dayjs("mm/dd", "mm/dd", "zh-cn");
dayjs().from(dayjs('1990'))