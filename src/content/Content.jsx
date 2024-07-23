/* eslint-disable react/no-unescaped-entities */
import dataRequest from '../assets/DataRequest.png';
import excelData from '../assets/ExcelData.png';
import loadCSV from '../assets/loadCSV.png';
import dfHead from '../assets/df-head.png';
import arnabData from '../assets/ArnabData.png';
import dropData from '../assets/dropData.png';
import finalData from '../assets/finalData.png';
import tabulate from '../assets/tabulate.png';
import toDateTime from '../assets/toDateTime.png';
import hkTime from '../assets/hkTime.png';
import title from '../assets/title.png';
import durationSumCode from '../assets/durationSumCode.png';
import durationSum from '../assets/durationSum.png';
import topShows from '../assets/topShows.png';
import weekdays from '../assets/weekdays.png';
import weekdayscode from '../assets/weekdayscode.png';
import hour from '../assets/hour.png';
import scattercode from '../assets/scattercode.png';
import scatter from '../assets/scatter.png';

function Content() {
  return (
    <div className="w-[65ch] text-gray-700 text-lg mb-20">
      <section>
        <h3 id="introduction">Introduction</h3>
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
            className="text-blue-500 hover:text-blue-600"
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
        <img src={dataRequest} alt="Request data page on Netflix" />
      </section>

      <section>
        <h3 id="readData">Read the Dataset</h3>
        <p>
          After some exploration in the Netflix data folder, the
          ViewingActivity.csv file in the CONTENT_INTERACTION folder seems like
          the file that contains my streaming history. The snapshot below shows
          what the data looks like in an excel table.
        </p>
        <img
          className="transition ease-in-out duration-500 hover:scale-150"
          src={excelData}
          alt="Netflix data shown in an excel table."
        />
        <p>
          Looking at the table, the most relevant columns for my project are
          'Start Time', 'Duration', and 'Title'. It's worth noting that the
          start time is provided in{' '}
          <a
            href="https://www.timeanddate.com/worldclock/timezone/utc"
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            UTC Timezone
          </a>{' '}
          and will need to be converted into local time. Another challenge is
          that the title of the show and episode names are combined into a
          single column.
        </p>
        <p>
          We are now ready to load the csv file data using the{' '}
          <span className="text-pink-500">Pandas</span> library. We import the
          pandas library and use the{' '}
          <span className="text-pink-500">read_csv</span> method to read our
          data into a Pandas dataframe called{' '}
          <span className="text-pink-500">df</span>. The{' '}
          <span className="text-pink-500">shape</span> method can be called to
          view the size of the dataset and the{' '}
          <span className="text-pink-500">head</span> method shows the first 5
          rows in the dataframe. The output shows we have 20,927 rows and 10
          columns.
        </p>
        <img src={loadCSV} alt="Python code to load csv file into programme." />
        <img src={dfHead} alt="Shape of dataset and first 5 rows." />
      </section>

      <section>
        <h3 id="preprocessing">Data Preprocessing</h3>
        <p>
          Since this is a shared Netflix account, I'll first have to drop rows
          that belong to other people and just retain my data. I used the{' '}
          <span className="text-pink-500">df.drop()</span> method with the
          condition 'Profile Name' != 'Arnab' to drop all other accounts. This
          left me with 7743 rows of the dataset representing the content I
          watched.
        </p>
        <img
          src={arnabData}
          alt="First five rows of my data."
          className="transition ease-in-out duration-500 hover:scale-150"
        />
        <p>
          For the sake of this project, I'll drop the columns not actually being
          used and just keep the{' '}
          <span className="text-pink-500">Start Time</span>,{' '}
          <span className="text-pink-500">Duration</span>, and{' '}
          <span className="text-pink-500">Title</span> columns. To do this, I'll
          use the <span className="text-pink-500">df.drop()</span> and pass it 2
          arguments - a list of columns I want to drop and{' '}
          <span className="text-pink-500">axis=1</span>, which tells Pandas to
          drop columns. We now have 7743 rows and 3 columns.
        </p>
        <img
          src={dropData}
          alt="Code to drop unwanted data."
          className="transition ease-in-out duration-500 hover:scale-150"
        />
        <img src={finalData} alt="First five rows of the required data." />
        <p>
          Upon checking the types of the 3 columns with{' '}
          <span className="text-pink-500">df.dtypes</span>, it shows all three
          types as 'object' which means they are all represented as strings.
          This is okay for the 'Title' column, but the other 2 columns need to
          be changed to Pandas <span className="text-pink-500">datetime</span>{' '}
          and <span className="text-pink-500">timedelta</span> formats, so we
          can perform calculations on them. Furthermore, the 'Start Time' needs
          to be converted from UTC to my local time.
        </p>
        <p>
          I'll start by converting the Start Time dtype to datetime using
          Pandas' <span className="text-pink-500">pd.to_datetime()</span>{' '}
          method, with the optional argument of utc=True. At this point, I will
          also import the <span className="text-pink-500">tabulate</span>{' '}
          library to display the output with better styles.
        </p>
        <img
          src={toDateTime}
          alt="Code to convert column to datetime format."
          className="transition ease-in-out duration-500 hover:scale-150"
        />
        <img src={tabulate} alt="Tabulate library used for better styles." />
        <p>
          Next, I'll convert the UTC time to Hong Kong local time with the{' '}
          <span className="text-pink-500">df.tz_convert()</span> method. This
          method can only be used on a DateTimeIndex, so we'll use{' '}
          <span className="text-pink-500">set_index()</span> before the
          conversion. Finally, the Duration column needs to be changed to
          timedelta format using the{' '}
          <span className="text-pink-500">pd.to_timedelta()</span> method. We
          can also filter out the rows with 'Duration' less than 1 minute by
          comparing the <span className="text-pink-500">Timedeltas</span>.
        </p>
        <img src={hkTime} alt="Convert utc to Hong Kong time." />
        <p>
          We now have 6351 rows for the data analysis. Since I'm more interested
          in the names of shows than the episode names, I will filter 'Title'
          column using regex:{' '}
          <span className="text-pink-500">
            df['Title'].str.replace(':.*', '', regex=True)
          </span>
        </p>
        <img src={title} alt="Dataframe after editing titles." />
      </section>

      <section>
        <h3 id="dataAnalysis">Data Analysis and Visualization</h3>
        <p>
          I will start the analysis by finding the total duration of the shows
          and movies I watched on Netflix. It can be achieved using the{' '}
          <span className="text-pink-500">groupby()</span> and{' '}
          <span className="text-pink-500"> sum()</span> functions together. The
          total time comes out to be{' '}
          <span className="text-pink-500">92 days 17 hours!</span>
        </p>
        <img src={durationSumCode} alt="Code to find duration of tv shows." />
        <p>My top 10 shows are:</p>
        <img src={durationSum} alt="Total duration of tv shows watched." />
        <p>
          For visualizing this data, I will use the Seaborn library which
          provides a large variety of color palettes and themes for making
          appealing graphs.
        </p>
        <img
          className="transition ease-in-out duration-500 hover:scale-[2.5] hover:translate-x-72 border-blue-300 border-2"
          src={topShows}
          alt="Bar plot showing my top 10 watched shows."
        />
        <p>
          Next, we'll analyze the 'Start Time' column by finding out the number
          of episodes I watched each day of the week using the{' '}
          <span className="text-pink-500">weekday</span> attribute. This can be
          done using the <span className="text-pink-500">groupby().size()</span>{' '}
          method. It can be seen there is not much variation throughout the
          week.
        </p>
        <img
          src={weekdayscode}
          alt="Code for finding out episodes watched per day."
        />
        <img
          className="transition ease-in-out duration-500 hover:scale-[2] hover:translate-x-72 border-blue-300 border-2"
          src={weekdays}
          alt="Plot of episodes watched per day of week."
        />
        <p>
          In a similar way, we can view the number of episodes watched by hour
          of the day using the <span className="text-pink-500">hour</span>{' '}
          attribute. The data shows a trend that I watch a few episodes during
          the day and the most in the evening, but not very late at night -
          which makes sense coz I'm more of a morning person.
        </p>
        <img
          className="transition ease-in-out duration-500 hover:scale-[2] hover:translate-x-72 border-blue-300 border-2"
          src={hour}
          alt="Plot of episodes watched by hour of the day"
        />
        <p>
          Next up, I want to analyze by favourite show - Brooklyn Nine-Nine. As
          calculated above, I have watched B99 for a cumulative duration of 13
          days. Thats a lot of time spent on one shows! Now I would like to see
          how my B99 viewing history is spread over the past 3 years.
        </p>
        <p>
          First, I drop all rows where{' '}
          <span className="text-pink-500">Title</span> is not equal to{' '}
          <span className="text-pink-500">Brooklyn Nine-Nine</span>, and then
          drop the 'Duration' column. To find out what times I watched the show,
          I create a new column using the{' '}
          <span className="text-pink-500">dt.hour</span> attribute. Finally, I
          create a Seaborn scatterplot with the x-axis set to 'Start Time' and
          y-axis as 'Hour'.
        </p>
        <img
          src={scattercode}
          alt="Code for scatter plot of Brooklyn Nine Nine."
        />
        <p>
          We can see 7 distinct columns in the scatter plot - this suggests that
          I've watched Brooklyn Nine-Nine 6 or 7 time, which sounds about right.
          The points are also distributed throughout the day, since I often put
          on the show while doing something else like exercise.
        </p>
        <img
          className="transition ease-in-out duration-500 hover:scale-[2] hover:translate-x-72 border-blue-300 border-2"
          src={scatter}
          alt="Scatter plot of Brooklyn Nine Nine."
        />
      </section>
      <section>
        <h3 id="conclusion">Conclusion</h3>
        <p>
          That brings us to the end of this data analysis and thanks to my
          binge-watching, I had quite a good data set to work with. In the
          process of reading, cleaning, preprocessing, and analyzing this data,
          I became familiar with various python and Pandas methods required for
          analyzing different types of data.
        </p>
        <p>
          If you would also like to follow along this project, you can acquire
          your Netflix data with the steps mentioned above and use my code from{' '}
          <a
            className="text-blue-500"
            href="https://github.com/TrashP/netflix-data-analysis"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          {' '}
          Even though this project was rather simple and didn't cover all my
          viewing activities, it was a good exercise to introduce the concepts
          of data analysis. I would like to build on this foundation and tackle
          some more complex problems in this area. This provided with me a good
          starting point for my next project and possibly my next job!
        </p>
      </section>
    </div>
  );
}

export default Content;
