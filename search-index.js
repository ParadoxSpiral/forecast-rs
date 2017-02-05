var searchIndex = {};
searchIndex["forecast"] = {"doc":"This module exposes an SDK for interacting with the Dark Sky API.","items":[[3,"DataPoint","forecast","Model object containing various properties, each representing the average (unless otherwise specified) of a particular weather phenomenon ocurring during a period of time.",null,null],[12,"apparent_temperature","","",0,null],[12,"apparent_temperature_max","","",0,null],[12,"apparent_temperature_max_time","","",0,null],[12,"apparent_temperature_min","","",0,null],[12,"apparent_temperature_min_time","","",0,null],[12,"cloud_cover","","",0,null],[12,"dew_point","","",0,null],[12,"humidity","","",0,null],[12,"icon","","",0,null],[12,"moon_phase","","",0,null],[12,"nearest_storm_bearing","","",0,null],[12,"nearest_storm_distance","","",0,null],[12,"ozone","","",0,null],[12,"precip_accumulation","","",0,null],[12,"precip_intensity","","",0,null],[12,"precip_intensity_max","","",0,null],[12,"precip_intensity_max_time","","",0,null],[12,"precip_probability","","",0,null],[12,"precip_type","","",0,null],[12,"pressure","","",0,null],[12,"summary","","",0,null],[12,"sunrise_time","","",0,null],[12,"sunset_time","","",0,null],[12,"temperature","","",0,null],[12,"temperature_max","","",0,null],[12,"temperature_max_time","","",0,null],[12,"temperature_min","","",0,null],[12,"temperature_min_time","","",0,null],[12,"time","","",0,null],[12,"visibility","","",0,null],[12,"wind_bearing","","",0,null],[12,"wind_speed","","",0,null],[3,"DataBlock","","Model object representing the various weather phenomena ocurring over a period of time.",null,null],[12,"data","","",1,null],[12,"summary","","",1,null],[12,"icon","","",1,null],[3,"Alert","","Model object representing a severe weather warning issued by a government authority for the requested location.",null,null],[12,"description","","",2,null],[12,"expires","","",2,null],[12,"title","","",2,null],[12,"uri","","",2,null],[3,"Flags","","Model object representing a flag which contains miscellaneous metadata about a request.",null,null],[12,"darksky_unavailable","","",3,null],[12,"metno_license","","",3,null],[12,"sources","","",3,null],[12,"units","","",3,null],[3,"ApiResponse","","Model object representing a Forecast or Time Machine API response.",null,null],[12,"latitude","","",4,null],[12,"longitude","","",4,null],[12,"timezone","","",4,null],[12,"offset","","",4,null],[12,"currently","","",4,null],[12,"minutely","","",4,null],[12,"hourly","","",4,null],[12,"daily","","",4,null],[12,"alerts","","",4,null],[12,"flags","","",4,null],[3,"ApiClient","","The ApiClient is a thin wrapper around a `hyper::Client` which sends requests to the Forecast and Time Machine APIs.",null,null],[3,"ForecastRequest","","Model object representing a request to the Forecast API.",null,null],[3,"ForecastRequestBuilder","","Builder object used to construct a ForecastRequest.",null,null],[3,"TimeMachineRequest","","Model object representing a request to the Time Machine API.",null,null],[3,"TimeMachineRequestBuilder","","Builder object used to construct a TimeMachineRequest.",null,null],[4,"Icon","","Model object representing an icon for display.",null,null],[13,"ClearDay","","",5,null],[13,"ClearNight","","",5,null],[13,"Rain","","",5,null],[13,"Snow","","",5,null],[13,"Sleet","","",5,null],[13,"Wind","","",5,null],[13,"Fog","","",5,null],[13,"Cloudy","","",5,null],[13,"PartlyCloudyDay","","",5,null],[13,"PartlyCloudyNight","","",5,null],[13,"Hail","","",5,null],[13,"Thunderstorm","","",5,null],[13,"Tornado","","",5,null],[4,"PrecipType","","Model object representing the kind of precipitation ocurring at a particular time.",null,null],[13,"Rain","","",6,null],[13,"Snow","","",6,null],[13,"Sleet","","",6,null],[4,"ExcludeBlock","","Model object representing a DataBlock to exclude from the response.",null,null],[13,"Currently","","",7,null],[13,"Minutely","","",7,null],[13,"Hourly","","",7,null],[13,"Daily","","",7,null],[13,"Alerts","","",7,null],[13,"Flags","","",7,null],[4,"ExtendBy","","When present in a request, this feature causes response data to be reported for 168 hours into the future instead of 48 hours.",null,null],[13,"Hourly","","",8,null],[4,"Lang","","Model object representing language.",null,null],[13,"Arabic","","",9,null],[13,"Azerbaijani","","",9,null],[13,"Belarusian","","",9,null],[13,"Bosnian","","",9,null],[13,"Czech","","",9,null],[13,"German","","",9,null],[13,"Greek","","",9,null],[13,"English","","",9,null],[13,"Spanish","","",9,null],[13,"French","","",9,null],[13,"Croatian","","",9,null],[13,"Hungarian","","",9,null],[13,"Indonesian","","",9,null],[13,"Italian","","",9,null],[13,"Icelandic","","",9,null],[13,"Cornish","","",9,null],[13,"NorwegianBokmal","","",9,null],[13,"Dutch","","",9,null],[13,"Polish","","",9,null],[13,"Portugese","","",9,null],[13,"Russian","","",9,null],[13,"Slovak","","",9,null],[13,"Serbian","","",9,null],[13,"Swedish","","",9,null],[13,"Tetum","","",9,null],[13,"Turkish","","",9,null],[13,"Ukranian","","",9,null],[13,"IgpayAtinlay","","",9,null],[13,"SimplifiedChinese","","",9,null],[13,"TraditionalChinese","","",9,null],[4,"Units","","Model object representing measurement units.",null,null],[13,"Auto","","",10,null],[13,"CA","","",10,null],[13,"UK","","",10,null],[13,"Imperial","","",10,null],[13,"SI","","",10,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"icon"}],"output":{"name":"bool"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"preciptype"}],"output":{"name":"bool"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"excludeblock"}],"output":{"name":"bool"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",8,{"inputs":[{"name":"self"},{"name":"extendby"}],"output":{"name":"bool"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",9,{"inputs":[{"name":"self"},{"name":"lang"}],"output":{"name":"bool"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",10,{"inputs":[{"name":"self"},{"name":"units"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"datapoint"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"datapoint"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"datablock"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"datablock"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"alert"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"alert"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"flags"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"flags"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"apiresponse"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"apiresponse"}],"output":{"name":"bool"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a new ApiClient.",11,{"inputs":[{"name":"client"}],"output":{"name":"apiclient"}}],[11,"get_forecast","","Send a Forecast API request, returns the corresponding Response.",11,{"inputs":[{"name":"self"},{"name":"forecastrequest"}],"output":{"name":"apiresult"}}],[11,"get_time_machine","","Send a Time Machine API request, returns the corresponding Response.",11,{"inputs":[{"name":"self"},{"name":"timemachinerequest"}],"output":{"name":"apiresult"}}],[11,"eq","","",12,{"inputs":[{"name":"self"},{"name":"forecastrequest"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"self"},{"name":"forecastrequest"}],"output":{"name":"bool"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",12,{"inputs":[{"name":"str"},{"name":"f64"},{"name":"f64"},{"name":"url"},{"name":"vec"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"forecastrequest"}}],[11,"into_url","","",12,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"eq","","",13,{"inputs":[{"name":"self"},{"name":"forecastrequestbuilder"}],"output":{"name":"bool"}}],[11,"ne","","",13,{"inputs":[{"name":"self"},{"name":"forecastrequestbuilder"}],"output":{"name":"bool"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","A Forecast API request is constructed with required params `api_key`, `latitude`, and `longitude`.",13,{"inputs":[{"name":"str"},{"name":"f64"},{"name":"f64"}],"output":{"name":"forecastrequestbuilder"}}],[11,"exclude_block","","Add a DataBlock to exclude from the response.",13,{"inputs":[{"name":"self"},{"name":"excludeblock"}],"output":{"name":"forecastrequestbuilder"}}],[11,"exclude_blocks","","Add multiple DataBlocks to exclude from the response.",13,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"forecastrequestbuilder"}}],[11,"extend","","Extend the time window of the response data from 48 hours to 168 hours.",13,{"inputs":[{"name":"self"},{"name":"extendby"}],"output":{"name":"forecastrequestbuilder"}}],[11,"lang","","Set the language for messages in the response data.",13,{"inputs":[{"name":"self"},{"name":"lang"}],"output":{"name":"forecastrequestbuilder"}}],[11,"units","","Set the measurement units for response data.",13,{"inputs":[{"name":"self"},{"name":"units"}],"output":{"name":"forecastrequestbuilder"}}],[11,"build","","Finalize the request.",13,{"inputs":[{"name":"self"}],"output":{"name":"forecastrequest"}}],[11,"eq","","",14,{"inputs":[{"name":"self"},{"name":"timemachinerequest"}],"output":{"name":"bool"}}],[11,"ne","","",14,{"inputs":[{"name":"self"},{"name":"timemachinerequest"}],"output":{"name":"bool"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",14,{"inputs":[{"name":"str"},{"name":"f64"},{"name":"f64"},{"name":"u64"},{"name":"url"},{"name":"vec"},{"name":"option"},{"name":"option"}],"output":{"name":"timemachinerequest"}}],[11,"into_url","","",14,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"eq","","",15,{"inputs":[{"name":"self"},{"name":"timemachinerequestbuilder"}],"output":{"name":"bool"}}],[11,"ne","","",15,{"inputs":[{"name":"self"},{"name":"timemachinerequestbuilder"}],"output":{"name":"bool"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","A Time Machine API request is constructed with required params `api_key`, `latitude`, `longitude`, and `time`.",15,{"inputs":[{"name":"str"},{"name":"f64"},{"name":"f64"},{"name":"u64"}],"output":{"name":"timemachinerequestbuilder"}}],[11,"exclude_block","","Add a DataBlock to exclude from the response.",15,{"inputs":[{"name":"self"},{"name":"excludeblock"}],"output":{"name":"timemachinerequestbuilder"}}],[11,"exclude_blocks","","Add multiple DataBlocks to exclude from the response.",15,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"timemachinerequestbuilder"}}],[11,"lang","","Set the language for messages in the response data.",15,{"inputs":[{"name":"self"},{"name":"lang"}],"output":{"name":"timemachinerequestbuilder"}}],[11,"units","","Set the measurement units for response data.",15,{"inputs":[{"name":"self"},{"name":"units"}],"output":{"name":"timemachinerequestbuilder"}}],[11,"build","","Finalize the request.",15,{"inputs":[{"name":"self"}],"output":{"name":"timemachinerequest"}}]],"paths":[[3,"DataPoint"],[3,"DataBlock"],[3,"Alert"],[3,"Flags"],[3,"ApiResponse"],[4,"Icon"],[4,"PrecipType"],[4,"ExcludeBlock"],[4,"ExtendBy"],[4,"Lang"],[4,"Units"],[3,"ApiClient"],[3,"ForecastRequest"],[3,"ForecastRequestBuilder"],[3,"TimeMachineRequest"],[3,"TimeMachineRequestBuilder"]]};
initSearch(searchIndex);
