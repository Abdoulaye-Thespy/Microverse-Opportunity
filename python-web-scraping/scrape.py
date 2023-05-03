# How to scrape a webpage in python
import requests
from bs4 import BeautifulSoup

# Send a GET request to the webpage you want to scrape
response = requests.get("https://abdoulaye.pro")

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.content, 'html.parser')

# Find the element(s) you want to scrape using Beautiful Soup's selectors
title = soup.select_one('title').text
heading = soup.select_one('h1').text
paragraphs = [p.text for p in soup.select('p')]

# Print the scraped data
print("Title: ", title)
print("Heading: ", heading)
print("Paragraphs: ", paragraphs)