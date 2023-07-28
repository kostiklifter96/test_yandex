export class YandexApi {
  static getURL = async (files, setFiles, setSendStatus) => {
    if (files.length < 1) {
      alert("Выберите файлы!");
      return;
    }
    try {
      for (let i = 0; i < files.length; i++) {
        const res = await fetch(
          `https://cloud-api.yandex.net/v1/disk/resources/upload?path=/test/${files[i].name}&overwrite=true`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: process.env.REACT_APP_TOKEN_KEY,
            },
          }
        );
        const data = await res.json();

        this.sendFile(setFiles, files[i], data, setSendStatus);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  static sendFile = async (setFiles, elem, data, setSendStatus) => {
    try {
      const res = await fetch(data.href, {
        method: data.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: elem,
      });

      if (res.status === 201) {
        setFiles((f) => f.filter((el) => el.size !== elem.size));
      }

      setSendStatus(res.status);

      setTimeout(() => {
        setSendStatus(null);
      }, 500);
    } catch (error) {
      console.log(error.message);
    }
  };
}
