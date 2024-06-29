import pandas as pd
from tabulate import tabulate

df = pd.read_csv('../src/netflixData/CONTENT_INTERACTION/ViewingActivity.csv')

tempdf = df.head()
print(tabulate(tempdf, headers='firstrow', tablefmt='psql'))