import { vietNamThoiKi } from "../../data/period";

export const getMocThoiGian = async () => {
  try {
    return vietNamThoiKi;
  } catch (error) {
    return [];
  }
};
