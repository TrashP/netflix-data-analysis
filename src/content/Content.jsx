/* eslint-disable react/no-unescaped-entities */
function Content() {
  return (
    <div className="w-[65ch] text-gray-700 text-lg">
      <section>
        <h3>Introduction</h3>
        <p>
          For the past couple of years, I've been making a transition to
          Computer Science and exploring some of the areas of the subject. This
          led me to one of the most interesting topics in the field of CS - Data
          Analysis. I built this website to showcase one of my first practice
          datasets.
        </p>
        <p>
          The first step of the process was choosing a good dataset and
          collecting the data. Instead of using some popular data like the{' '}
          <a
            href="https://scikit-learn.org/stable/auto_examples/datasets/plot_iris_dataset.html"
            target="_blank"
            className="text-blue-500"
          >
            Iris dataset
          </a>
          , I thought it would be more interesting to use my own personal data
          for this project. Thanks to the countless hours of binge-watching
          content on Netflix, I had the perfect dataset for my purpose.
        </p>
        <p>
          If you're interested in getting your own Netflix data, log in to your
          account. Click on your account icon on the top-right corner and click
          'Account'. Next, click on 'Security' on the sidebar menu and then
          choose 'Personal info access'. Finally, click on 'Submit Request' and
          check your email for the confirmation link.
        </p>
      </section>
      <section></section>
    </div>
  );
}

export default Content;
