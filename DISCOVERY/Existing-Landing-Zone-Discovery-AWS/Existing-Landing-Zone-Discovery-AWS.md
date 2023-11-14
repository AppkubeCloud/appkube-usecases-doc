**Use Case:  Existing Landing Zone Discovery AWS**

![](Aspose.Words.24f46fa6-f3a9-4c4e-83c8-c86519f57e71.001.png)

![](Aspose.Words.24f46fa6-f3a9-4c4e-83c8-c86519f57e71.002.png)



After providing Display Name, ARN and External Id, UI asks to select from existing departments (organizational Unit) or add a new Department

![](Aspose.Words.24f46fa6-f3a9-4c4e-83c8-c86519f57e71.003.png)

1. Click on Select from Existing OU

CMDB API: 

GET:  /**organization/:orgId** (e.g /organization/1)

Note: This API provide list of its (given organization id) departments **and organization id comes from the signed in user’s profile.** 

1. Create New OU (Organizational Unit / Department)

CMDB API: 

POST:  /**department**

Finish screen

![](Aspose.Words.24f46fa6-f3a9-4c4e-83c8-c86519f57e71.004.png)

Cmdb API

POST:  /**landingzone**

`	`Note: AWS Region not provided, so vault will have default region **us-east-1** 

Sudo Code:

1. CMDB /landingzone API save data in Landingzone table (cmdb database)
1. CMDB /landingzone API call VAULT API to save credentials in VAULT
   1. VAULT URL and its encrypted root token given in .yaml file
      1. VAULT URL: <http://34.199.12.114:8200/v1/kv-v1>	
      1. Encrypted Root Token: a29LEjdI1LYKAKr7OpVlXx54y30kBem2QNdqn2FqUJ4=
   1. Vault creates a key for each landing zone as below

Vault Key Structure: organization/department/cloud/landing-zone

**e.g. 		SYNECTIKS/HR/AWS/062041849235**

For every key it maintains JSON of credentials as below

![](Aspose.Words.24f46fa6-f3a9-4c4e-83c8-c86519f57e71.005.png)

NOTE: Organization created from security service. In this screen it comes from signed in user’s profile

