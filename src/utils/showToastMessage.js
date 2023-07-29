import { toast } from "react-toastify";

export const showToastMessage = (sendStatus) => {
  switch (sendStatus.status) {
    case 201:
      toast.success(`${sendStatus.elem} успешно отправлен`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;

    case 202:
      toast.info(
        `${sendStatus.elem} файл принят сервером, но еще не был перенесен непосредственно в Яндекс.Диск.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;

    case 400:
      toast.error(`Некорректные данные.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;

    case 401:
      toast.error(`Пользователь не авторизован.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;

    case 403:
      toast.error(
        `API недоступно. Ваши файлы занимают больше места, чем у вас есть. Удалите лишнее или увеличьте объём Диска.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;

    case 406:
      toast.error(`Ресурс не может быть представлен в запрошенном формате.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;

    case 409:
      toast.error(`Указанного пути "{path}" не существует.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;

    case 412:
      toast.error(
        `${sendStatus.elem} при дозагрузке файла был передан неверный диапазон в заголовке Content-Range.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;

    case 413:
      toast.error(
        `${sendStatus.elem} размер файла больше допустимого. Если у вас есть подписка на Яндекс 360, можно загружать файлы размером до 50 ГБ, если подписки нет — до 1 ГБ.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;

    case 423:
      toast.error(
        `Технические работы. Сейчас можно только просматривать и скачивать файлы.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;
    case 429:
      toast.error(`Слишком много запросов.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;

    case 500 || 503:
      toast.error(
        `${sendStatus.elem} ошибка сервера, попробуйте повторить загрузку.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;

    case 507:
      toast.error(
        `${sendStatus.elem} для загрузки файла не хватает места на Диске пользователя.`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      break;

    default:
      break;
  }
};
