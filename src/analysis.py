import pandas as pd
from tabulate import tabulate
from datetime import timedelta
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('./netflixData/CONTENT_INTERACTION/ViewingActivity.csv')

# Drop unwanted columns and rows from the dataframe
df.drop(df[df['Profile Name'] != 'Arnab'].index, inplace=True)
df.drop(['Profile Name', 'Attributes', 'Supplemental Video Type', 'Device Type', 'Bookmark', 'Latest Bookmark', 'Country'], axis=1, inplace=True)

# Convert from string to datetime format for calculations
df['Start Time'] = pd.to_datetime(df['Start Time'], utc=True)

# Convert start time to index and change the timezone
df = df.set_index('Start Time')
df.index = df.index.tz_convert('Asia/Hong_Kong')
df = df.reset_index()

# Convert Duration to timedelta format
df['Duration'] = pd.to_timedelta(df['Duration'])

# Filter out short durations
df = df[df['Duration'] > '0 days 00:01:00']

# Edit title column to drop episode names
df['Title'] = df['Title'].str.replace(':.*', '', regex=True)

# Analyze viewing pattern for Brooklyn Nine-Nine
df.drop(df[df['Title'] != 'Brooklyn Nine-Nine'].index, inplace=True)
dfbnn = df.drop(['Duration'], axis=1)
dfbnn['Hour'] = dfbnn['Start Time'].dt.hour
dfbnn.sort_index(ascending=False, inplace=True)
sns.set_palette('pastel')
sns.scatterplot(x='Start Time', y='Hour', data=dfbnn)
plt.show()


###                 ###                 ###

# List every show and movie in the title column
# dftitle = df['Title'].drop_duplicates()
# print(tabulate(list(map(lambda x: [x], dftitle)), tablefmt='psql', headers=['Title']))

# Find duration of each show and total time
# dfduration = df.drop(['Start Time'], axis=1)
# dfsum = dfduration.groupby(['Title'])['Duration'].sum().reset_index()
# dfsum = dfsum.sort_values('Duration', ascending=False).head(10)
# print(tabulate(dfsum.head(10), tablefmt='psql', headers=['Title', 'Total Duration']))
# print(dfsum['Duration'].sum())

# Plot top 10 most watched shows with total time
# dfsum['Duration'] = dfsum['Duration'].dt.days
# sns.set_palette('pastel')
# sns.barplot(data=dfsum, x='Title', y='Duration')
# plt.show()

# Find and plot the number of episodes watched on each weekday
# df['Number'] = df['Start Time'].dt.weekday
# df['Weekday'] = df['Start Time'].dt.day_name()
# df['Hour'] = df['Start Time'].dt.hour
# dfdaysum = df.groupby(['Weekday', 'Number']).size().reset_index(name='Episodes')
# dfdaysum = dfdaysum.sort_values('Number')
# sns.set_palette('pastel')
# sns.barplot(data=dfdaysum, x='Weekday', y='Episodes')
# plt.show()

# Find and plot the number of episodes watched by each hour
# df['Hour'] = df['Start Time'].dt.hour
# dfdaysum = df.groupby(['Hour']).size().reset_index(name='Episodes')
# dfdaysum = dfdaysum.sort_values('Hour')
# sns.set_palette('pastel')
# sns.barplot(data=dfdaysum, x='Hour', y='Episodes')
# plt.show()