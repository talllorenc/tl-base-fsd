import { QueryClient } from "@tanstack/react-query";

const queryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // отключает автоматические повторные попытки при ошибке запроса
      refetchOnWindowFocus: false, // запрещает повторный запрос, когда пользователь возвращается к вкладке с приложением
      refetchOnMount: false, // не перезапрашивает данные при повторном маунте компонента
    },
  },
});

export default queryConfig;
