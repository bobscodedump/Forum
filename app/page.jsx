import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="blue_gradient head_text text-center">Mindful Musings</h1>
      <p className="desc text-center">
        Join our dynamic forum for engaging discussions, diverse voices, and
        meaningful connections across a wide range of topics.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
