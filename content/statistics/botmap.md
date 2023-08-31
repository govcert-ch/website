---
title: Bot Map 
image: bot_map.png
shows: gegraphical location of infected computers in Switzerland
weight: 60
js: [highmaps,data,exporting,switzerland]
---

## About the data
The map represents the DroneDB, a database containing infected systems in Switzerland that have been active the last 48h. This database is fed by different sources, mostly DNS sinkholes operated by different organizations, where infected clients connect to instead of the real C&C servers. This data is aggregated and filtered for all Swiss IP space known to NCSC/GovCERT and then attributed to the different cantons using Geolite City of maxmind. It must be noted that the geographical representation is neither exact nor complete. The map shows a relative indication of how strong a Canton is affected by malware by dividing the number of infected devices by the population. Even though this is far from perfect it is the best thing we have currently as we do not have any numbers about Internet connectivity per Canton. Another limiting point is the fact that one IP may represent one to many infected devices if it is a proxy server or a NAT device hiding various infections. It is important to note that these numbers just show the tip of the iceberg, as our database only contains data from sinkholed Command and Control servers.

## Action recommended
Action recommended: NCSC/GovCERT provides the list of infected system per AS (Autonomous System) to different ISPs. Any operator of a network owning its own AS may get this list in order to inform the affected customers within his own network boundary. The goal must be to reduce the number of infected systems, as well as the duration of an infection. GovCERT provides timely information about infections and the ISPs need to inform their customers. For doing so they need to have adequate abuse- and helpdesk resources. This information must be done by the respective ISPs as GovCERT has no information about who uses which IP at a given time.