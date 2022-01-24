import { PageArgs } from "../interfaces";

const Home = ({ pageArgument, pageContent }: PageArgs): void => {
  const render = ():void => {
    pageContent.innerHTML = `
      <section class="home">
        <div class="articles">Hey, this is the Home page!</div>
      </section>
    `
  }

  render();
};

export default Home;