import { PageArgs } from "../interfaces";

const PageList = ({ pageArgument, pageContent }: PageArgs): void => {
  const render = ():void => {
    pageContent.innerHTML = `
      <section class="home">
        <div class="articles">Hey, this page is a PageList template, about: ${pageArgument}!</div>
      </section>
    `
  }

  render();
};

export default PageList;