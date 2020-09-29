import { formatDistance, format, parse } from "date-fns";
import * as locale from "date-fns/locale";

console.log(Object.keys(locale).length)

formatDistance(new Date(), new Date());
format(new Date(), "mm/dd", { locale: locale.ru });
format(new Date(), "mm/dd", { locale: locale.zhCN });
parse("wefewf", "mm/dd", new Date(), { locale: locale.enUS });
