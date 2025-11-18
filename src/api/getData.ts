import axiosInstance from "./axios";

export const getChienSi = async ({
  hoTen = "a",
  namHySinh = "",
}: {
  hoTen?: string;
  namHySinh?: string;
}) => {
  const res = await axiosInstance.get(
    `/api/MoLietSi/GetPagingTraCuu?HoTen=${hoTen}&NamHySinh=${namHySinh}`
  );
  return res.data;
};
