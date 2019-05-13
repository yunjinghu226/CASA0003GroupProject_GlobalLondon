#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


rest = pd.read_csv("restaurants_final.csv")


# In[3]:


dummy_rest = pd.get_dummies(rest,columns=['general_ca'],prefix='gen_cat')


# In[4]:


dummy_rest.head()


# In[5]:


rest_agg = dummy_rest.drop(columns=['OID','category','id','latitude','longitude','label'])
br_cate = rest_agg.groupby(['name','code'],as_index=False).sum()
br_cate.head()


# In[6]:


br_cate_rename = br_cate.rename(index=str,columns={'gen_cat_African':'African','gen_cat_American':'American','gen_cat_Italian':'Italian','gen_cat_Chinese':'Chinese','gen_cat_European_Other':'European_Other','gen_cat_French':'French','gen_cat_Indian':'Indian','gen_cat_Japanese_Korean':'Japanese_Korean','gen_cat_Latin_American':'Latin_American','gen_cat_Mediterranean':'Mediterranean','gen_cat_Middle_Eastern':'Middle_Eastern','gen_cat_Other':'Other','gen_cat_Pakistani':'Pakistani','gen_cat_Southeast_Asian':'Southeast_Asian'})
br_cate_rename


# In[7]:


max_num = br_cate_rename.max(axis=1)


# In[8]:


br_cate_rename['max_num'] = br_cate_rename.max(axis=1)
br_cate_rename


# In[9]:


columns = list(br_cate_rename)


# In[10]:


def max_cat(row):
    for cat in columns:
        if row[cat] == row['max_num']:
            return cat
br_cate_rename['prev_cat'] = br_cate_rename.apply(max_cat,axis=1)
br_cate_rename


# In[11]:


def num_cat(row):
    count = 0
    for i in range(2,16):
        if row[i] != 0:
            count += 1
    return count
br_cate_rename['num_cat'] = br_cate_rename.apply(num_cat,axis=1)
br_cate_rename


# In[12]:


br_cate_rename.to_csv("borough_final.csv")

