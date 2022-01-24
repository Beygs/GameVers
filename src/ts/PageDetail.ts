import { PageArgs } from "../interfaces";

const PageDetail = ({ pageArgument, pageContent }: PageArgs): void => {
  const render = ():void => {
    pageContent.innerHTML = `
      <section class="home">
        <div class="articles">Hey, this is the Details Page of ${pageArgument}!</div>
      </section>
    `
  }

  render();
};

export default PageDetail;