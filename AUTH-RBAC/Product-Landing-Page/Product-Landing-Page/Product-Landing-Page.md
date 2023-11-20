**Product Landing Page**

**landing page**

**CMDB API End Point**: <http://34.199.12.114:6057/api>

![](./image1.png)

The landing page show Spend Analytics tab and this tab many statistics
comes from various CMDB APIs.

1.  Total Spend

![](./image2.png)

Api - GET:
/query/organization/:orgId/analytics/spend-analytics/spend-total

2.  Cloud wise spend

![](./image3.png)

Api -- GET:
query/organization/:orgId/analytics/spend-analytics/cloud-wise-spend

3.  Total Budget

![](./image4.png)

Api -- GET:
query/organization/:orgId/analytics/spend-analytics/total-budget

4.  Cloud wise spend

![](./image5.png)

Api -- GET:
query/organization/:orgId/analytics/spend-analytics/monthly-cloud-wise-spend

5.  Current spend rate

![](./image6.png)

Api -- GET:
query/organization/:orgId/analytics/spend-analytics/spend-current-rate/avg-per-hour

GET:
query/organization/:orgId/analytics/spend-analytics/spend-current-rate/per-day

6.  Spend Analytics

![](./image7.png)

Api -- GET:
query/organization/:orgId/analytics/spend-analytics/spend-today

GET: query/organization/:orgId/analytics/spend-analytics/spend-yesterday

7.  Monthly Statistics

> ![](./image8.png)
>
> Api -- GET:
> query/organization/:orgId/analytics/spend-analytics/monthly-statistics
