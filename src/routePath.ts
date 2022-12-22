export interface Page {
  route: string
  name: string
}

export const pages = {
  Menu: {
    route: "/menu",
    name: "Lab Calc",
  },
  Nechiporenko: {
    route: "/nechiporenko",
    name: "Нечипоренко",
  },
  Fibrinogen: {
    route: "/fibrinogen",
    name: "Фибриноген",
  },
  LPNP: {
    route: "/lpnp",
    name: "ЛПНП",
  },
  SMG: {
    route: "/smg",
    name: "КА",
  },
}
