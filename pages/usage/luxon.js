// @ts-check
import { DateTime } from "luxon";

new DateTime().setLocale("zh-cn").toFormat("mm/dd");
new DateTime().setLocale("ru").toFormat("mm/dd");
DateTime.fromFormat("tetx", "mm/dd", { locale: "en" });
DateTime.local().plus({ days: 1 }).toRelativeCalendar()  