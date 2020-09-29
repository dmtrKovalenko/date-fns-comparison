import { formatDistance, format, parse } from "date-fns";
import { ru, enUS, zhCN } from "date-fns/locale";

formatDistance(new Date(), new Date());
format(new Date(), "mm/dd", { locale: ru });
format(new Date(), "mm/dd", { locale: zhCN });
parse("wefewf", "mm/dd", new Date(), { locale: enUS });
