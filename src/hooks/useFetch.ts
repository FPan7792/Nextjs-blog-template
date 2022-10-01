import axios from "axios";

const UseFetch = async (URL: string) => {
  const datas = await axios.get(URL);

  return {
    datas,
  };
};

export default UseFetch;
