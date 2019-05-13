#!/usr/bin/env python
# coding: utf-8

# In[35]:


import requests
import json
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


# In[2]:


# essential arguments used to send api requests
api_key = 'UF5QVpBto76t3r-vYVt0eIXz6Kq-fsRSgggPQHW582_NF88DE0UOMvfBPv68cxs7ngjZKsnjF3xwAP_1YtWcmYAPktZnbNgannn-jc-TG1_M7qdVeopSs-TGDAtyXHYx'
headers = {'Authorization': 'Bearer %s' % api_key}
url = 'https://api.yelp.com/v3/businesses/search'


# In[3]:


# list of original categories available on Yelp
categories = ['italian','french','spanish','portuguese','austrian','belgian','bulgarian','czech','georgian','german','hungarian','fondue','polish','scandinavian','african','ethiopian','moroccan','mediterranean','greek','kebab','turkish','arabian','pakistani','mideastern','afghani','australian','russian','ukrainian','chinese','taiwanese','indpak','cambodian','indonesian','laotian','malaysian','singaporean','srilankan','thai','vietnamese','japanese','korean','bangladeshi','burmese','filipino','himalayan','asianfusion','mongolian','newamerican','tradamerican','hawaiian','mexican','argentine','brazilian','caribbean','cuban','latin','peruvian']


# In[4]:


# combined general categories
general_cate = [{'Italian':['italian']},
               {'Chinese':['chinese','taiwanese']},
               {'Indian':['indpak']},
               {'Japanese_Korean':['japanese','korean']},
               {'Pakistani':['pakistani']},
               {'Southeast_Asian':['thai', 'vietnamese', 'malaysian', 'indonesian', 'bangladeshi', 'burmese', 'singaporean', 'srilankan', 'laotian']},
               {'Mediterranean':['mediterranean', 'greek', 'turkish', 'kebab']},
               {'French':['french']},
               {'Middle_Eastern':['mideastern','arabian','afghani']},
               {'American':['tradamerican','newamerican']},
               {'European_Other':['spanish', 'portuguese', 'polish', 'german', 'scandinavian', 'belgian', 'austrian', 'hungarian', 'fondue', 'czech', 'bulgarian']},
               {'African':['african','moroccan','ethiopian']},
               {'Latin_American':['mexican','caribbean','latin', 'brazilian', 'argentine', 'peruvian', 'cuban']},
               {'Other':['asianfusion', 'russian', 'australian', 'hawaiian', 'filipino', 'himalayan', 'ukrainian', 'georgian']}
               ]


# In[7]:


# a csv containing the info to define search areas (processed from the London boroughs shapefile in ArcGIS)
centroids = pd.read_csv("centroids.csv")


# In[24]:


# create a list of search area parameters
c_x = centroids.centroid_x.tolist()
c_y = centroids.centroid_y.tolist()
mbg_r = centroids.radius.tolist()
search_areas = []
for i in range(33):
    search_para = dict(longitude=c_x[i],latitude=c_y[i],radius=int(mbg_r[i]))
    search_areas.append(search_para)


# In[28]:


# a series of functions used to retrieve and convert data
def search_area(offset,category,search_range):
    # return the list of businesses of certain category (string) in the specified search area (dictionary)

    params = {'term':'restaurants','locale':'en_GB','limit':50,'offset':offset,'categories':category}
    params.update(search_range)
    req=requests.get(url, params=params, headers=headers)
    return req.json()['businesses']

def business_retriever(category,search_range):
    # retrive the json data of a certian cusine category in the specified area and store as a list

    cate_results = []

    # test number of total restaurants in this category
    params = {'term':'restaurants','locale':'en_GB','limit':1,'offset':0,'categories':category}
    params.update(search_range)
    req=requests.get(url, params=params, headers=headers)

    if req.status_code == 200: # proceed only if the status code is 200
        total = req.json()['total']
        if total > 1000:
            print ('There are more than 1000 restaurants under category',category,'. Only the first 1000 will be returned.')
            for offset in range(0,1000,50):
                results = search_area(offset,category,search_range)
                cate_results.extend(results)
        elif total > 50 and total <= 1000:
            for offset in range(0,total,50):
                results = search_area(offset,category,search_range)
                cate_results.extend(results)
        else:
            cate_results.extend(search_area(0,category,search_range))

    else:
        print ('Error in retrieving data.')

    return cate_results

def extractor(categories,search_range):
    # extract useful info from data retrieved and combine restaurants of different categories into one list
    full_restaurants = []
    for category in categories: # loop through all the categories
        results = business_retriever(category,search_range)
        for restaurant in results: # loop through restaurants in each category
            if restaurant['is_closed'] == False: # only keep records that are still open
                rest_out = {}
                rest_out['id'] = restaurant['id']
                rest_out['category'] = category
                rest_out['longitude'] = restaurant['coordinates']['longitude']
                rest_out['latitude'] = restaurant['coordinates']['latitude']
                full_restaurants.append(rest_out)
    return full_restaurants


# In[29]:



# loop through the search areas, extract restaurant information and combine them together
rest_list = []
for area in search_areas:
    resta_area = extractor(categories,area)
    rest_list.extend(resta_area)



# In[32]:


# transform the list to a dataframe
rest_df = pd.DataFrame(rest_list)
# remove the duplicates
final_df = rest_df.drop_duplicates(subset='id')


# In[37]:


# a new column was added to the dataframe and the general category of each entry was assigned
final_df.loc[:,'general_category'] = np.nan
for dicts in general_cate:
    for small_cate in list(dicts.values())[0]:
        final_df.loc[final_df.category == small_cate,['general_category']] = list(dicts.keys())[0]


# In[39]:


final_df.to_csv("restaurants.csv")
