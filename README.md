# Appkube Key Use Cases 
As a Cloud Admin we would like to see the following 
    
- Infra Insight for Clouds i.e Which cloud has what workloads , say for all cloud-product enclave- landingZone combination What services (app/data whether business or common) corresponding to which products and environments are deployed.

- Services Insight for any specific  Product-Env - i.e show the 
    - Detail Topology i.e Firewall-> ApiGw -> LB -> Service Mesh -> (Business & Common Services)-> (App & Data Services for every business & common services)  
    - Detail insight of every participating components (Firewall-> ApiGw -> LB -> Service Mesh -> Services)
    - For any business or common service, how App & Data Services calls each other
    - How App service is calling other App service
    - Detail navigation of each app and data services ( Metadata + Performance/ Availability / Reliability / Security / Data Protection / EndUsage + Cost)
    - Cost & SLA scores of each app and data services
    - RCA for every App & Data Services (Performance & Reliability)
    - Find the Api performance & Reliability for each business & common services
    - RCA for every API ( Tracing & Logging)
- Departmental Insight for their products and environments
    - Spend structure of Departments- which product and services are costing more
    - Detail insights of PROD VS NON PROD spending 
- Cloud Explorer 
    - For every product enclaves created in any cloud , we would like to have the visibility on compliance / security / cost , its landing zones and clusters and all the services that is deployed either in cluster or cloud managed.
- Cluster Explorer
    - For every cluster , we would like to have the visibility on cost & sla's
- Service Explorer 
    - For every App & Data Services , we would like to have the visibility on cost & sla's & topology
- DevSecOps Tooling 
    - All Dev / Sec / Ops tools that determine the COST & SLA's of every product & services


# Appkube-UseCases

# Table of content

| Module | Usecase Title | Prototype link | Tech Flow  | Usecase Doc | TestCase
| - | - | - | - |  - |  - | 
| Discovery |  |  |  |
|  | Existing Landing Zone Discovery | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=32-55641&viewport=307%2C703%2C0.18&t=SN48ramSZjnLkITh-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  | [📚 appkube-usecases-doc/DISCOVERY/Existing-Landing-Zone-Discovery-AWS/Existing-Landing-Zone-Discovery-AWS.md at main · AppkubeCloud/appkube-usecases-doc](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/DISCOVERY/Existing-Landing-Zone-Discovery-AWS/Existing-Landing-Zone-Discovery-AWS.md)  |[Usecase Doc](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/DISCOVERY/Existing-Landing-Zone-Discovery-AWS/Existing-Landing-Zone-Discovery-UC.md) |  
|  | Existing Root Account Discovery |  |  |
|  | Show infra Topology | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=6-6665&viewport=109%2C-283%2C0.08&t=5wjVyTYIHJZrRdDi-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  | [📚 appkube-usecases-doc/DISCOVERY/Show-infra-Topology/Show-Infra-Topology-AWS.md at main · AppkubeCloud/appkube-usecases-doc](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/DISCOVERY/Show-infra-Topology/Show-Infra-Topology-AWS.md) |[Usecase Doc](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/DISCOVERY/Existing-Landing-Zone-Discovery-AWS/Infra-Topology-View-UC.md)|https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/DISCOVERY/Show-infra-Topology/Show%20Infra%20Topology%20iew.md
|  |  |  |  |
|  | Show Infra Element Explorer (EC2/EKS/RDS) |  | Please link any one explorer, we need usecase |
|  | Search CloudElement/ Services |   | do |
|  | Filter and Search in Asset ENV Home Page |  | [📚 appkube-usecases-doc/DISCOVERY/Filter-and-Search-in-Asset-ENV-Home-Page/Filter-and-Search-in-Asset-ENV-Home-Page.md at main · AppkubeCloud/appkube-usecases-doc](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/DISCOVERY/Filter-and-Search-in-Asset-ENV-Home-Page/Filter-and-Search-in-Asset-ENV-Home-Page.md)  |
| Topology |  |  |  |
|  | Show App List  | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=6-19742&viewport=109%2C-283%2C0.08&t=5wjVyTYIHJZrRdDi-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  |  |
|  | Show App Topology 3 Tier | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=6-20747&viewport=471%2C-433%2C0.03&t=V5Tioyzl2eAxy6iE-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  |  |
|  | Show App Topology Microservices | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=6-23678&viewport=471%2C-485%2C0.03&t=ZMeRbsbt2hVktRrv-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  |  |
|  | Show App and Data Services Explorer |  | Screens Not ready |
|  |  |  |  |
| Business to Infra Mapping |  |  |  |
|  | Manually Add products / environment / Apps/ services or tiers to any org/departments |  |  |
|  | Import Landing Zone Wise Product / Environment / Apps/ Services or Tiers |  |  |
|  | Show All Assets / Tagged Assets / Orphaned Assets  | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=40-57369&viewport=296%2C-1876%2C0.03&t=Arg3kxWBHApUn038-1&scaling=scale-down-width&starting-point-node-id=1%3A2103&mode=design)  | do |
|  | Tag Compliance | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=32-56236&viewport=133%2C-19425%2C0.24&t=O3RSq2dNn8auIXgL-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  | do |
|  | Associate Cloud Element to Business Service | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=6-27673&viewport=378%2C-2935%2C0.07&t=2cG12rxt42T9W02b-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  |  |
|  | Show Apps in CloudElement | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=20-33857&viewport=231%2C-2305%2C0.04&t=UC7CnfafviXhTBiZ-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  |  |
|  |  |  |  |
| Automation |  |  |  |
|  | Create New Landing Zone |  | Redesign - catalogue Mgmt |
|  | Create Product Enclave in Landing Zone |  | Redesign - catalogue Mgmt |
|  | Create Cluster in Product Enclave |  | Redesign - catalogue Mgmt |
|  | Create 3 Tier Product Design Template and Deploy |  |  |
|  | Create Microservices Product Design Template and Deploy |  |  |
|  |  |  |  |
| SRE  |  |  |  |
|  | Publish Dashboards in Catalogue with Category ( Cloud/ Element Type / Nature) |  |  |
|  | Set Logs / Trace / event for Cloud Element |  | Screens Not Ready |
|  | Enable Monitoring for Element |  |  |
|  | Enable Dashboards for Cloud Element  |  |  |
|  | Create/ Save Views |  |  |
|  | Show Non Monitored Elements |  |  |
|  |  |  |  |
| Reports & Analytics |  |  |  |
|  | Show Home Screen( Cost / Quality / process) | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=20-38442&viewport=231%2C-2305%2C0.04&t=UC7CnfafviXhTBiZ-1&scaling=scale-down&starting-point-node-id=1%3A2103&mode=design)  |  |
|  | Show Service SLA scores |  |  |
|  | Show Drill Down for Services SLA |  |  |
|  | Show Drilldown for Costs SLA |  |  |
|  | Show Drildown for process SLA |  |  |
|  | Cost By Month |  |  |
|  | Cost By Region |  |  |
|  | Cost By Aws Accounts |  |  |
|  | Costs By Departments |  |  |
|  | Costs by Department and Products |  |  |
|  | Costs by Department and Products & ENV |  |  |
|  | Costs by Department and Products & ENV & SERVCES |  |  |
|  | Actual Vs Non Actual |  |  |
|  | Costs By Compute/ Storage / Network / DB |  |  |
|  | Costs By clouds |  |  |
|  | Costs by clouds/region |  |  |
|  | Cost per product/feature/env/ customer/team |  |  |
|  |  |  |  |
| Password Change/Auth/RBAC |  |  |  |
|  | Manage Password |   |[📚appkube-usecases-doc\AUTH-RBAC\Password-change\Password-change.md](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/AUTH-RBAC/Password-change/Password-change.md)  | |[Manage Password TC](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/AUTH-RBAC/Password-change/Password-Change-TC.md)
|  | Manage Organization / Departments |   |  |
|  | Manage User/ Group / Role / Transaction | [📚 Figma](https://www.figma.com/proto/Gi2V8cyDzL6epvmclPKpAP/AppKube-usecase?page-id=0%3A1&type=design&node-id=20-50724&viewport=231%2C-2305%2C0.04&t=UC7CnfafviXhTBiZ-1&scaling=min-zoom&starting-point-node-id=1%3A2103&mode=design)  |  |
|  | Manage Access on Transaction |  |  |
|  | Product Landing Page |  |  |
|  | Product Login(email /password )Github/ Goggle/ Microsoft integration |  |[📚appkube-usecases-doc/AUTH-RBAC/Product-Login-email-password/Sign_In.md at main · AppkubeCloud/appkube-usecases-doc](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/AUTH-RBAC/Product-Login-email-password/Sign_In.md) | |[Sign-In-TC](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/AUTH-RBAC/Product-Login-email-password/Sign%20In-TC.md)
| | Product Signup(email /password ) |  |[📚appkube-usecases-doc\AUTH-RBAC\Product-Login-email-password\Sign_up.md](https://github.com/AppkubeCloud/appkube-usecases-doc/blob/main/AUTH-RBAC/Product-Login-email-password/Sign_up.md) |
|  
 | Logout |  |  |
| Alert |  |  |  |
|  | Show and Search Alerts |  |  |
|  | Generate Ticket |  |  |
|  |  |  |  |
| Service Desk |  |  |  |
|  | Ticket Management & Lifecycle |  |  |
|  | Product Help Guide |  |  |
|  |  |  |  |
| Integration |  |  |  |
|  | Integrate with Product Alert Manager |  |  |
|  | Integrate with Product Service Desk |  |  |
|  | Integrate with SLACK / TEAM |  |  |
|  | Integrate with Jira Service Desk |  |  |
|  | Integrate with Service Now |  |  |
|  |  |  |  |
| Appkube ElementManager's Dashboards |  |  |  |
| Appkube Cloud DataSource Design |  |  |  |
| Appkube Alert Manager |  |  |  |
| Appkube Service Desk Design |  |  |  |
| Appkube Website Design |  |  |  |
| Workflows App Design |  |  |  |
| Procurement App Design |  |  |  |
| FinOps |  |  |  |
| DevOps |  |  |  |
| SecOps |  |  |  |
| DRS |  |  |  |
| IOT |  |  |  |
| Microservice |  |  |  |
| Lake |  |  |  |

