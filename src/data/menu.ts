export interface MenuItem {
  id: string;
  title: string;
  path: string;
}

export const menuData: MenuItem[] = [
  { id: "1", title: "Chống Pháp", path: "/viet-nam-thoi-ki/1858-1945" },
  { id: "2", title: "Chống Mỹ", path: "/viet-nam-thoi-ki/1945-1975" },
  { id: "3", title: "Xây dựng", path: "/chien-si-hi-sinh/1975-1986" },
  { id: "4", title: "Đổi mới", path: "/chien-si-hi-sinh/1986-2000" },
];
