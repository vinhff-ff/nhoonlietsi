import AnhMain from '../asset/anhMain.jpg'
export interface ImgMainItem {
  id: number;
  name: string;
  img: string;
  ngayThang: string;
  noiDung: string;
  path: string;
}

export const mainImages: ImgMainItem[] = [
  {
    id: 1,
    name: "Hồ Chí Minh",
    img: `${AnhMain}`,
    ngayThang: "1890-1969",
    noiDung: "Hồ Chí Minh",
    path: "Hồ Chí Minh",
  }
];
