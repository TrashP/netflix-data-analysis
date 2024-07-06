import pandas as pd
from tabulate import tabulate
from datetime import timedelta

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

df['Title'] = df['Title'].str.replace(':.*', '', regex=True)

dftable = df.head()
# print(df.shape)
# Print with a better style
print(tabulate(dftable, headers=['Start Time', 'Duration', 'Title']))
