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
    img: "https://cdn.baohatinh.vn/images/93923d58fc3bb0f0af3e4594b0c37b71d566b88ce44aeca5cd1e2e1d5190f17044007254023cb0832b1739c5b9800072/77d5063829t3920l49.jpg",
    ngayThang: "1890-1969",
    noiDung: "Hồ Chí Minh",
    path: "Hồ Chí Minh",
  }
];
