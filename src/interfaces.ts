interface Routes {
  [key: string]: (arg: {
    pageArgument: string;
    pageContent: HTMLElement;
  }) => void;
}

interface PageArgs {
  pageArgument: string;
  pageContent: HTMLElement;
}

export {
  Routes,
  PageArgs
}