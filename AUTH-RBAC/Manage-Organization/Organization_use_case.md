**Security Service API End Point:** <http://34.199.12.114:8094/security>

**CMDB API End Point**: <http://34.199.12.114:6057/api>

**Add Organization**

**NOTE**: Organization table is maintained in both services (Security
and CMDB) and both organization tables maintained cross id references
**[but can be created by Security service]{.underline}**.

There are two ways to create organization.

1.  Direct add API of Organization table

POST:
http://34.199.12.114:8094/security/organization/add?pushToCmdb=true

Body: {

    \"name\":\"test-12\"

> }

Sudo code:

1.  If this **pushToCmdb=true**, this API will create organization in
    security service and call POST API of CMDB service to create
    organization in CMDB database.

2.  Once the record created in CMDB organization table, security service
    updates the cmdb organization id in its own organization table.

```{=html}
<!-- -->
```
2.  Create User API call

POST: http://34.199.12.114:8094/security/users/create

Sudo code:

1.  In this API, we provide Organization name in form-data.

2.  If this organization does not exits in security service, API creates
    the Organization from the given organization name and push it to
    CMDB.

3.  This API does not require **pushToCmdb** request param

> NOTE: This API is used from Standalone UI create user feature.
