export const BASE_URL = process.env.REACT_APP_DB_URL;
const Path: Record<string, string> = {
  Home: "/",
  ThongTinCuocChien:"/viet-nam-thoi-ki/:period",
  ThongTinChienSi: `chien-si-hi-sinh/:nam`
};
export default Path;
