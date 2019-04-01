# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [1.0.0](https://github.com/Opteo/google-ads-api/compare/v0.6.1...v1.0.0) (2019-04-01)


### Bug Fixes

* **campaign_budget:** added original mutation tests ([53f1634](https://github.com/Opteo/google-ads-api/commit/53f1634))
* **client:** cleanup + removed dead files ([81b8338](https://github.com/Opteo/google-ads-api/commit/81b8338))
* **client:** handle grpc search errors ([3767bae](https://github.com/Opteo/google-ads-api/commit/3767bae))
* **constants:** removed, not needed anymore ([9d70e76](https://github.com/Opteo/google-ads-api/commit/9d70e76))
* **constants:** updated base api url to v1 ([cf2043a](https://github.com/Opteo/google-ads-api/commit/cf2043a))
* **conversionActions:** ignore broken tests for now ([a157bb4](https://github.com/Opteo/google-ads-api/commit/a157bb4))
* **customer:** support for new services ([3a77fa2](https://github.com/Opteo/google-ads-api/commit/3a77fa2))
* **docs:** include information on helper methods ([ba82132](https://github.com/Opteo/google-ads-api/commit/ba82132))
* **docs:** removed some ts bits ([f6e8940](https://github.com/Opteo/google-ads-api/commit/f6e8940))
* **files:** minor filepath updates ([59aa81d](https://github.com/Opteo/google-ads-api/commit/59aa81d))
* **http:** added original http methods back to support listing ([552ed4c](https://github.com/Opteo/google-ads-api/commit/552ed4c))
* **index:** renamed resources to types ([41ae97a](https://github.com/Opteo/google-ads-api/commit/41ae97a))
* **linting:** minor fixes ([d751256](https://github.com/Opteo/google-ads-api/commit/d751256))
* **old_services:** updated type paths in old services ([23dac17](https://github.com/Opteo/google-ads-api/commit/23dac17))
* **package:** minor updates to package.json and build system ([54a4b4a](https://github.com/Opteo/google-ads-api/commit/54a4b4a))
* **pagination:** reorded pagination to make more sense ([dace0a1](https://github.com/Opteo/google-ads-api/commit/dace0a1))
* **readme:** updated readme to reflect v1 changes ([68da908](https://github.com/Opteo/google-ads-api/commit/68da908))
* **scripts:** service test template changes ([3add14d](https://github.com/Opteo/google-ads-api/commit/3add14d))
* **segments:** removed, not needed anymore ([9594b44](https://github.com/Opteo/google-ads-api/commit/9594b44))
* **service:** reverted debug code ([41ca616](https://github.com/Opteo/google-ads-api/commit/41ca616))
* **services:** ensure partial failure option is set correctly ([ce03cd9](https://github.com/Opteo/google-ads-api/commit/ce03cd9))
* **services:** fix a few typos in mutate method and request names ([f87bc08](https://github.com/Opteo/google-ads-api/commit/f87bc08))
* **services:** new compiled tests, includes get test if valid ([f5bf687](https://github.com/Opteo/google-ads-api/commit/f5bf687))
* **services:** remove old plural services ([9ea69d4](https://github.com/Opteo/google-ads-api/commit/9ea69d4))
* **services:** removed mutate methods from unsupported services ([551a868](https://github.com/Opteo/google-ads-api/commit/551a868))
* **services:** updated gads-node to allow mutates on criteria ([7a632c1](https://github.com/Opteo/google-ads-api/commit/7a632c1))
* **services:** updated types paths for all services ([e1ee817](https://github.com/Opteo/google-ads-api/commit/e1ee817))
* **temp:** added old services to temp dir ([9a0cc5e](https://github.com/Opteo/google-ads-api/commit/9a0cc5e))
* **tests:** changes to reporting tests to support grpc ([cdc1119](https://github.com/Opteo/google-ads-api/commit/cdc1119))
* **tests:** increase timeout in adgroup ad tests ([f137bac](https://github.com/Opteo/google-ads-api/commit/f137bac))
* **tests:** more default tests + use enums in old error tests ([3f580de](https://github.com/Opteo/google-ads-api/commit/3f580de))
* **types:** changed DateConstant to be a string literal type ([6c69509](https://github.com/Opteo/google-ads-api/commit/6c69509))
* **types:** minor definition changes to respect gads v1 ([6f0f253](https://github.com/Opteo/google-ads-api/commit/6f0f253))
* **types:** removed some non global types ([2f1af1d](https://github.com/Opteo/google-ads-api/commit/2f1af1d))
* **types:** use selectable with metric + segment types ([e1b9d7b](https://github.com/Opteo/google-ads-api/commit/e1b9d7b))
* **utils:** refactored buildReportQuery method ([dd78118](https://github.com/Opteo/google-ads-api/commit/dd78118))
* **utils:** remove entity prefix from segment constraints ([d17aef7](https://github.com/Opteo/google-ads-api/commit/d17aef7))
* **utils:** various fixes to parsing methods to support grpc ([52768de](https://github.com/Opteo/google-ads-api/commit/52768de))
* **various:** removed custom metrics. added fromMicros and toMicros global methods ([1146492](https://github.com/Opteo/google-ads-api/commit/1146492))


### Features

* **campaignBudgets:** new service calls + tests ([a622eaa](https://github.com/Opteo/google-ads-api/commit/a622eaa))
* **client:** moved client (index.ts) to new client.ts ([7e18ac5](https://github.com/Opteo/google-ads-api/commit/7e18ac5))
* **coverage:** added coverage reporting ([900a1ca](https://github.com/Opteo/google-ads-api/commit/900a1ca))
* **customer:** added customer get method ([e371b15](https://github.com/Opteo/google-ads-api/commit/e371b15))
* **customer:** added customer list method ([6790343](https://github.com/Opteo/google-ads-api/commit/6790343))
* **customer:** added customer updated method ([696608a](https://github.com/Opteo/google-ads-api/commit/696608a))
* **customer:** added query method ([e4a09d1](https://github.com/Opteo/google-ads-api/commit/e4a09d1))
* **customer:** setup customer report method with tests ([d4add67](https://github.com/Opteo/google-ads-api/commit/d4add67))
* **docs:** added mutation operations information ([6838aa3](https://github.com/Opteo/google-ads-api/commit/6838aa3))
* **docs:** info on error handling ([2f74824](https://github.com/Opteo/google-ads-api/commit/2f74824))
* **error:** added new grpc search error type ([3ae4a2b](https://github.com/Opteo/google-ads-api/commit/3ae4a2b))
* **errors:** added support for enum error codes + gads-node version bump ([f88586c](https://github.com/Opteo/google-ads-api/commit/f88586c))
* **examples:** added add keywords example ([4e04592](https://github.com/Opteo/google-ads-api/commit/4e04592))
* **examples:** added get keyword stats ([100bfaa](https://github.com/Opteo/google-ads-api/commit/100bfaa))
* **google-ads-node:** installed latest version of google-ads-node grpc library ([53135bb](https://github.com/Opteo/google-ads-api/commit/53135bb))
* **grpc:** changed report method to internally use grpc services ([5abf1ee](https://github.com/Opteo/google-ads-api/commit/5abf1ee))
* **grpc:** connected buildResource method ([0c32030](https://github.com/Opteo/google-ads-api/commit/0c32030))
* **index:** changed exports to include types + enums ([03085f5](https://github.com/Opteo/google-ads-api/commit/03085f5))
* **package:** update google-ads-node ([b2aa281](https://github.com/Opteo/google-ads-api/commit/b2aa281))
* **package:** updated google-ads-node ([d559156](https://github.com/Opteo/google-ads-api/commit/d559156))
* **package:** updated google-ads-node to 1.4.1 ([641c904](https://github.com/Opteo/google-ads-api/commit/641c904))
* **package:** upgraded google-ads-node to 1.4.4 ([b9c8a9b](https://github.com/Opteo/google-ads-api/commit/b9c8a9b))
* **package:** upgraded google-ads-node to v1.4.2 ([5dd92e7](https://github.com/Opteo/google-ads-api/commit/5dd92e7))
* **pagination:** new method for grpc pagination ([ba88b3a](https://github.com/Opteo/google-ads-api/commit/ba88b3a))
* **scripts:** added service + test compilation script for valid services, added templates ([ab6a411](https://github.com/Opteo/google-ads-api/commit/ab6a411))
* **scripts:** added service compilation script ([cad1fb8](https://github.com/Opteo/google-ads-api/commit/cad1fb8))
* **service:** added generic reporting and mutation service methods ([0d01182](https://github.com/Opteo/google-ads-api/commit/0d01182))
* **services:** added compiled services + tests. added imports to customer ([2d1d560](https://github.com/Opteo/google-ads-api/commit/2d1d560))
* **services:** added support for adgroups ([3995708](https://github.com/Opteo/google-ads-api/commit/3995708))
* **services:** started setting up new services ([4174fbf](https://github.com/Opteo/google-ads-api/commit/4174fbf))
* **services:** started work on base service ([7720f5e](https://github.com/Opteo/google-ads-api/commit/7720f5e))
* **services:** started work on campaign + budget services ([74e7f0c](https://github.com/Opteo/google-ads-api/commit/74e7f0c))
* **services:** support for multiple entities in create + update methods ([5baaa2f](https://github.com/Opteo/google-ads-api/commit/5baaa2f))
* **test_utils:** added getRandomName method ([8abb9db](https://github.com/Opteo/google-ads-api/commit/8abb9db))
* **tests:** added basic error handling tests ([54dfa5b](https://github.com/Opteo/google-ads-api/commit/54dfa5b))
* **tests:** added some basic test utils ([a265d0b](https://github.com/Opteo/google-ads-api/commit/a265d0b))
* **tests:** new config + env setup for testing ([914ade1](https://github.com/Opteo/google-ads-api/commit/914ade1))
* **utils:** added getEnumString method to get enum string values ([6a9c905](https://github.com/Opteo/google-ads-api/commit/6a9c905))