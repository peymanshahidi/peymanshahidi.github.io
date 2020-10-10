---
title: "Iran's House Price Index"
collection: codes
permalink: /codes/stata/iranhpi
date: 2020-10-10
venue: 'Stata Codes'
---

This command calculates monthly BMN and CS house price indices
using the repeated transactions method for Iran's data.
If only 10-digit postal codes are provided, all calculations
will be based on 10-digit postal codes. If 6-digit postal codes 
are provided, calculations will be based only on 6-digit postal 
codes (10-digit postal codes will be converted to 6-digits).

Filters considered in order to find houses whose characteristics 
does not change in consecutive transations are as follows (same 
house in repeated transactions). In consecutive transactions
for the same house:
1. construction year must be constant. (+11 month error max)
2. area must be constant.
3. after a sale, no transaction of the same house is allowed for 
a certain period. (default = 1 period)
4. change in house prices can not exceed a specified limit 
compared to monthly average of all transcations occurred in 
the data. (default = 10000 :no limit)

[[ADO file]](https://www.dropbox.com/s/af6g2fmxl4qqmqx/iranhpi.ado?dl=0)
[Sample Data (for test)](https://www.dropbox.com/s/ozcxjrkwf4av8dl/iranhpi_test.dta?dl=0)
[Do file (for test)](https://www.dropbox.com/s/95kp3qjwrlstrwm/test_iranhpi.do?dl=0)
[Stata help file]

### Last Update: October 10, 2020
