#!/usr/bin/env python
# coding: utf-8

# # Mission to Mars

# ## Step 1: Scraping
# Build a web application that scrapes various websites for data related to the Mission to Mars and displays the information in a single HTML page.

# In[11]:


from splinter import Browser
import os
from bs4 import BeautifulSoup


# In[12]:


# Set the executable path and initialize the chrome browser in splinter
executable_path = {'executable_path': 'chromedriver.exe'}
browser = Browser('chrome', **executable_path, headless=False)


# ### NASA Mars News
# * Scrape the [NASA Mars News Site](https://mars.nasa.gov/news/) and collect the latest News Title and Paragraph Text. 
# * Assign the text to variables that you can reference later.

# In[32]:


# Visit the mars nasa news site
url = 'https://mars.nasa.gov/news/'
browser.visit(url)
# Convert the browser html to a soup object
html = browser.html
news_soup = BeautifulSoup(html, 'html.parser')


# In[33]:


all_titles = news_soup.find_all('div', class_ = 'content_title')
all_titles


# In[37]:


news_title = all_titles[3].get_text()
news_title


# In[38]:


article_teaser = news_soup.find_all('div', class_ = 'article_teaser_body')


# In[39]:


news_teaser = article_teaser[3].get_text()
news_teaser


# ### JPL Mars Space Images - Featured Image
# * Visit the url for JPL Featured Space Image [here](https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars).
# * Use splinter to navigate the site and find the image url for the current Featured Mars Image and assign the url string to a variable called `featured_image_url`.
# * Make sure to find the image url to the full size `.jpg` image.
# * Make sure to save a complete url string for this image.

# In[40]:


url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
browser.visit(url)


# In[41]:


featured_image_url = 'https://www.jpl.nasa.gov' + browser.find_by_xpath('//article[@class="carousel_item"]')[0]['style'].split('"')[1]
featured_image_url


# ### Mars Facts
# 
# * Visit the Mars Facts webpage [here](https://space-facts.com/mars/) and use Pandas to scrape the table containing facts about the planet including Diameter, Mass, etc.
# * Use Pandas to convert the data to a HTML table string.

# In[44]:


import pandas as pd
url = 'https://space-facts.com/mars/'
mars_facts = pd.read_html(url)[0].to_html
mars_facts


# ### Mars Hemispheres
# 
# * Visit the USGS Astrogeology site [here](https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars) to obtain high resolution images for each of Mar's hemispheres.
# * You will need to click each of the links to the hemispheres in order to find the image url to the full resolution image.
# * Save both the image url string for the full resolution hemisphere image, and the Hemisphere title containing the hemisphere name. Use a Python dictionary to store the data using the keys `img_url` and `title`.
# * Append the dictionary with the image url string and the hemisphere title to a list. This list will contain one dictionary for each hemisphere.

# In[45]:


#https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars
#click on each hemispere link 
#get jpg "sample url"


# In[46]:


url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
browser.visit(url)


# In[47]:


hemisphere_image_urls_title = browser.find_by_xpath('//h3')


# In[48]:


for h in hemisphere_image_urls_title:
    print(h.text)


# In[49]:


hemisphere_image_urls_title_list = [h.text for h in hemisphere_image_urls_title]
hemisphere_image_urls_title_list


# In[50]:


lookup = browser.find_by_xpath('//h3/parent::a')


# In[51]:


#Do we get anything? 
len(lookup)


# In[52]:


#yes, four somethings, probably the hemisphere names again...
for l in lookup:
    print(l.text)


# In[53]:


#But, want we need the href, so....
for l in lookup:
    print(l['href'])


# In[54]:


#vist the urls/code the visits
#looking for an anchor with text including "Sample"
hemisphere_image_urls = browser.find_by_xpath('//a[text()="sample"]')


# In[55]:


import time


# In[58]:


url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
browser.visit(url)
time.sleep(1)
hemisphere_image_urls = []
not_tied_to_browser = [n['href'] for n in browser.find_by_xpath('//h3/parent::a')]
for link in not_tied_to_browser:
    browser.visit(link)
    time.sleep(1)
    hemisphere_image_urls.append(browser.find_by_xpath('//a[text()="Sample"]')[0]['href'])


# In[59]:


hemisphere_image_urls
#yay


# In[60]:


#Make a list! Zip = list of couples
list(zip(hemisphere_image_urls,hemisphere_image_urls_title_list))
#List of tuples


# In[61]:


#can I get a woot woot for list comprehension? 
[{'title':title, 'img_url':link} for title, link in zip(hemisphere_image_urls_title_list,hemisphere_image_urls)]


# In[63]:


#new method/concept/data structure: "set" will make a list of unique values/variables that cannot be duplicated. 
output = {
    'news_title' : news_title,
    'news_teaser': news_teaser,
    'featured': featured_image_url,
    'Mars_facts': mars_facts,
    'hemisphere_image_urls': hemisphere_image_urls}


# In[64]:


output

