"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6766],{"./src/stories/programs/components/session-details.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_uxbee_storybook_mock_sc__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@uxbee/storybook-mock-sc/lib/index.js"),programs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/programs/dist/index.mjs"),_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/programs/data/speaker-mock-data.ts"),_data_session_mock_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/programs/data/session-mock-data.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"RAI/Programs/SessionDetail",component:programs__WEBPACK_IMPORTED_MODULE_2__.SN,tags:["autodocs","rai","ep"],argTypes:{},decorators:[(Story,context)=>(0,_uxbee_storybook_mock_sc__WEBPACK_IMPORTED_MODULE_1__.WithSitecoreContextDecorator)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-h-screen bg-[#fafafa]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})),context,programs__WEBPACK_IMPORTED_MODULE_2__.SN,!1)]},Default={args:{language:"en",session:_data_session_mock_data__WEBPACK_IMPORTED_MODULE_4__.v[0],speakers:[{speaker:_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__.U[0],programs:_data_session_mock_data__WEBPACK_IMPORTED_MODULE_4__.v.slice(1,2)},{speaker:_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__.U[1],programs:[]},{speaker:_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__.U[2],programs:_data_session_mock_data__WEBPACK_IMPORTED_MODULE_4__.v.slice(4,2)},{speaker:_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__.U[3],programs:[]},{speaker:_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__.U[4],programs:[]},{speaker:_data_speaker_mock_data__WEBPACK_IMPORTED_MODULE_3__.U[5],programs:[]}],getParentPageUrl:()=>"/programs",buildSessionDetailUrl:()=>"/session_detail",buildSpeakerDetailUrl:()=>"/speaker_detail",buildCalendarIcsFileUrl:()=>"/session_ics",texts:{back:"Back",speakers:"Speakers",hideSessions:"Hide Sessions",showSessions:"Show Sessions"},timezoneOffset:0}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    language: \"en\",\n    session: SessionMockData[0],\n    speakers: [{\n      speaker: SpeakerMockData[0],\n      programs: SessionMockData.slice(1, 2)\n    }, {\n      speaker: SpeakerMockData[1],\n      programs: []\n    }, {\n      speaker: SpeakerMockData[2],\n      programs: SessionMockData.slice(4, 2)\n    }, {\n      speaker: SpeakerMockData[3],\n      programs: []\n    }, {\n      speaker: SpeakerMockData[4],\n      programs: []\n    }, {\n      speaker: SpeakerMockData[5],\n      programs: []\n    }],\n    getParentPageUrl: () => \"/programs\",\n    buildSessionDetailUrl: () => '/session_detail',\n    buildSpeakerDetailUrl: () => '/speaker_detail',\n    buildCalendarIcsFileUrl: () => '/session_ics',\n    texts: {\n      back: 'Back',\n      speakers: 'Speakers',\n      hideSessions: 'Hide Sessions',\n      showSessions: 'Show Sessions'\n    },\n    timezoneOffset: 0\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/stories/programs/data/session-mock-data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>SessionMockData});const SessionMockData=[{description:"Introduction by moderator Carlo van de Weijer and welcome by the Provincial Executive and Deputy Mayor of Amsterdam on Accelerating towards sustainable, safe and smart mobility for all. Followed by speeches from the Head of Unit DG MOVE of the European Commission on the European pathway for Sustainable, Smart and Resilient Transportation and the Alderman of the City of Brussels on Good Move, the Minister of Transport and Mobility Transition of the City Hamburg on mobility innovations and autonomous ridepooling for Hamburg’s public transport network, the VP/Alliance Global Director of Nissan Advanced Technology Center on role of vehicle technology and AI, an ITSUP preview from the CEO of Swarco and finally the announcement of the Intertraffic Awards.\n\nAccess to the Official Opening Ceremony is for exhibitors and invitees only.",end_date:1713255300,event_id:"0022357",id:"intertrafficams20240001",image_url:"https://www.intertraffic.com/amsterdam/-/media/0873d9eb7f9f443da7042873c4a8cc87.png",location:"Intertraffic Summit Theatre 1",start_date:1713249e3,timezone_offset:72e5,title:"Grand Opening Intertraffic - Smart, Safe and Sustainable Mobility for all (for exhibitors and invitees only)",topic:"Sustainable Urban Mobility"},{description:'Creating space in the dense city. We provide cities with "Smart Zones" – bookable and multifunctional curbside space that can adapt to changing demands. Think about spaces for (un)loading of goods during weekdays, mobility hubs in the evening and a terrace on the weekends. Our digital solution reshapes public space allocation and ownership, enabling a more efficient management of the scarce space. Towards smart cities where logistic congestion are resolved and the streets are human-centered. Free the city!\nCapacity: 5-10 persons',end_date:1713281400,event_id:"0022357",id:"intertrafficams20240167",image_url:"https://www.intertraffic.com/amsterdam/-/media/adca82e40e13428dabe701c065216a8b.png",location:"Demo Area (hall 7)",start_date:1713252600,timezone_offset:72e5,title:"Coding the Curbs’ smart zones (Future Mobility Network)",topic:"Smart Parking"},{description:"A guided walk-sharing app that connects parents from the same school to each other, along with other members of the community, to facilitate the organization of different 'walking buses' with multiple safe routes for walking to school.",end_date:1713281400,event_id:"0022357",id:"intertrafficams20240171",image_url:"https://www.intertraffic.com/amsterdam/-/media/f615bbdc1109488ebc2b6e926e8ff7e7.png",location:"Demo Area (hall 7)",start_date:1713252600,timezone_offset:72e5,title:"Scool2Walk (Future Mobility Network)",topic:"Smart Safe and Sustainable Mobility"},{description:"The Macrostep robot is an autonomous delivery vehicle, offering convenience by bringing the store directly to you. With its diversified capabilities, it transforms using various top-applications like a vending-machine, cargo-box or a package wall, catering to diverse needs effortlessly. Operating autonomously, it navigates with precision, ensuring reliable and efficient service without human intervention. Its current use extends to for example holiday parks, where it efficiently delivers essentials such as linens and freshly baked pizzas, elevating guest experiences. With Macrostep, the future of delivery is redefined, promising seamless and flexible solutions for various demands.\nCapacity: 10 persons",end_date:1713281400,event_id:"0022357",id:"intertrafficams20240175",image_url:"https://www.intertraffic.com/amsterdam/-/media/e3681110ecef4d82a63bc28fa5ef326f.png",location:"Demo Area (hall 7)",start_date:1713252600,timezone_offset:72e5,title:"Macrostep autonomous driving delivery robot Scool2Walk (Future Mobility Network)",topic:"Connected and Automated Driving"},{description:"The ELMO shared car is a remote-controlled shared car that is delivered to your doorstep. The renter orders a shared car via an app, which then drives to the renter - without a driver. A specially trained and certified remote driver takes the car to the desired starting point. The renter can then get in via the app and drive away with the car. once you arrive at your destination, the car remains behind, and the vehicle is driven back to a parking space (or hub with shared mobility).\nCapacity: 1 person per timeslot.",end_date:1713255300,event_id:"0022357",id:"intertrafficams20240179",image_url:"https://www.intertraffic.com/amsterdam/-/media/e3681110ecef4d82a63bc28fa5ef326f.png",location:"Demo Area (hall 7)",start_date:1713253500,timezone_offset:72e5,title:"ELMO (Future Mobility Network)",topic:"Connected and Automated Driving"},{description:"Mobipolis provides insight into the challenge of a city that is developing rapidly and at the same time needs to remain accessiblle. Cooperation and an integrated approach are central. \nCapacity: 6 persons.",end_date:1713276e3,event_id:"0022357",id:"intertrafficams20240163",image_url:"https://www.intertraffic.com/amsterdam/-/media/f615bbdc1109488ebc2b6e926e8ff7e7.png",location:"Demo Area (hall 7)",start_date:1713254400,timezone_offset:72e5,title:"Serious Gaming Mobipolis (CROW)",topic:"Smart Safe and Sustainable Mobility"},{description:"Data-driven solutions are essential for enhancing the safety, efficiency, and sustainability of our transportation network as well as operation of connected and automated vehicles (CAVs) in complex traffic environments. Data-driven solutions can leverage the rich information from various in-vehicle and external sources to enable CAVs to perceive, predict, and respond to dynamic situations on the road. They can unlock the full potential of CAVs and transform the future of mobility. However, these solutions also face significant challenges, such as data quality, privacy, security, scalability, and interoperability. Our guests will discuss this topic from different perspectives. They will also share their success stories, challenges, and lessons learned.",end_date:1713258900,event_id:"0022357",id:"intertrafficams20240016",image_url:"https://www.intertraffic.com/amsterdam/-/media/e3681110ecef4d82a63bc28fa5ef326f.png",location:"Intertraffic Summit Theatre 3",start_date:1713256200,timezone_offset:72e5,title:"Data-driven Solutions in Connected and Automated Driving",topic:"Connected and Automated Driving"},{description:"Road safety encompasses a variety of measures and precautions aimed at preventing accidents, injuries, and fatalities on roads. These include improvements to road infrastructure, traffic enforcement, vehicle safety enhancements, and promoting safer driving behaviour among road users. In this session, we will explore various worldwide Vision Zero approaches and policy strategies focused on saving lives on our roads. Varying from innovative traffic and infrastructure technologies, bold policy measures, to community engagement initiatives. We will examine how different approaches contribute to the overarching goal of eliminating road traffic fatalities and severe injuries. Join us as we uncover key insights and share best practices in creating safer roads for all.",end_date:1713258900,event_id:"0022357",id:"intertrafficams20240009",image_url:"https://www.intertraffic.com/amsterdam-/media/6927df6c954b4e27ad9a5a139791cc8f.png",location:"Intertraffic Summit Theatre 2",start_date:1713256200,timezone_offset:72e5,title:"Panel discussion on Vision Zero and lifesaving road safety strategies",topic:"Road Safety"},{description:"Discover how to conduct pilot programs, expand operating hours, and enlarge your Demand- Responsive Transport operations without the need for additional drivers or vehicles. Learn about the benefits of elastic fleets that combine your existing vehicle fleet with private hire vehicles to enhance reliability, boost ridership, and decrease the cost per trip. Find out how transport agencies, urban planners, and rail operators have successfully leveraged this innovative strategy.",end_date:1713258e3,event_id:"0022357",id:"intertrafficams20240108",image_url:"https://www.intertraffic.com/amsterdam/-/media/0873d9eb7f9f443da7042873c4a8cc87.png",location:"Intertraffic Summit Theatre 4",start_date:1713256200,timezone_offset:72e5,title:"Transforming Demand Responsive Transport: The Advantages of Asset-Free and Elastic Fleets",topic:"Sustainable Urban Mobility"},{description:"Worldwide there’s an increasing pressure on mobility networks and the environment. As a result, the implementation of mobility policy via traffic management is key to cater for the diverse needs of road users, road authorities, cities, and their inhabitants. Within the range of traffic management instruments, traffic lights can be one of the most efficient and effective solutions to accommodate the diverse needs of different mobility stakeholders. By using the new generation of intelligent traffic light installations (iTLIs), cities can harmonise traffic flows more efficiently, via dynamic traffic light controls. This reduces congestion and pollution, thereby saving time, fuel and CO2 emissions as well as money. In this presentation, several use cases will illustrate how cities can put their policy into practice on the roads with the help of road users by utilizing new data sources and ITS technologies with award-winning Flowtack iTLI’s solution.",end_date:1713258e3,event_id:"0022357",id:"intertrafficams20240073",image_url:"https://www.intertraffic.com/amsterdam/-/media/3eab7b5b2bbd4b63b38ced98bebd8ba4.png",location:"Intertraffic Summit Theatre 1",start_date:1713256200,timezone_offset:72e5,title:"Managing today's and tomorrow's mobility by implementing policy",topic:"Traffic Management"}]},"./src/stories/programs/data/speaker-mock-data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>SpeakerMockData});const SpeakerMockData=[{company_name:"Yunex Traffic",description:"Jason Lu is the product manager for Yunex Traffic's traffic management system. Jason began his transportation career as an operator at a traffic management center in the United States while studying civil engineering at the University of Washington. After years of experiencing firsthand that efficient and sustainable mobility requires more than just optimizing for cars, Jason moved to Germany to expand his knowledge in urban planning and railway infrastructure, and now holds a master's degree in Transportation Systems from the Technical University of Munich. As a proponent of optimizing mobility for people, not cars, Jason strives every day with his team to enable traffic operators and planners around the world to accelerate their transition towards sustainable mobility. Having worked in high-stress traffic operations environments, Jason also places heavy emphasis on design and usability to improve workflows and make the day-to-day lives of TMC operators easier.",full_name:"Jason Lu",id:"spkintertrafficams20240001",image_url:"https://www.intertraffic.com/amsterdam/-/media/ae29126ba2414061b8f7eeb0f178df00.jpg",job_title:"Product manager",location:"Intertraffic Summit Theatre 1",sessions:["intertrafficams20240002"]},{company_name:"Valerann",description:"A serial tech entrepreneur and a commercial lawyer, Gabriel began his career as an M&A lawyer in the industrial infrastructure and energy sectors. Working with a broad range of his clients that included both, large corporates and innovative startups, inspired him to become an entrepreneur and led him to launching his first company in the green tech (solar energy) field. His passion for advanced technology, AI and data analytics, resulted in establishing Valerann in 2016. \nNative to Israel, Gabriel holds an MBA from London Business School, and LLB (honours) and BA in Economics from Bar Ilan University.",full_name:"Gabriel Jacobson",id:"spkintertrafficams20240005",image_url:"https://www.intertraffic.com/amsterdam/-/media/dd9e44e9d8aa498abcaed023c70631c8.jpg",job_title:"CEO",location:"Intertraffic Summit Theatre 2",sessions:["intertrafficams20240010"]},{company_name:"Xenonatix",full_name:"Kris de Meester",id:"spkintertrafficams20240010",image_url:"https://www.intertraffic.com/amsterdam/-/media/5d4c34f0aa2842769ecc1079edd5b3fe.jpg",job_title:"Vice President Sales&BD",location:"Intertraffic Summit Theatre 2",sessions:["intertrafficams20240012"]},{company_name:"Rijkswaterstaat",description:"Michiel Bontenbal is advisor on intelligent and smart traffic management at Rijkswaterstaat. He has been department head for 22 years in Rijkswaterstaat. In 2021 he started with his growing interest for Smart Mobiliy to be project manager C4Safety. This project brings safety to our road inspectors and road workers. Through in-car technique and secured data management, the road user will be utterly served and informed.",full_name:"Michiel Bontenbal",id:"spkintertrafficams20240014",image_url:"https://www.intertraffic.com/amsterdam/-/media/a778a4e812a3471cb128f03622fbb3b8.png",job_title:"Project manager",location:"Intertraffic Summit Theatre 2",sessions:["intertrafficams20240014"]},{company_name:"Nissan Motor Corporation USA",full_name:"Liam Pedersen",id:"spkintertrafficams20240019",image_url:"https://www.intertraffic.com/amsterdam/-/media/82fc9975216a4979b09a7dcf94a54e72.jpg",job_title:"Chief Scientist",location:"Intertraffic Summit Theatre 3",sessions:["intertrafficams20240016"]},{company_name:"European Cyclists' Federation",full_name:"Henk Swarttouw",id:"spkintertrafficams20240023",image_url:"https://www.intertraffic.com/amsterdam/-/media/70bacadcb15b41f9809c09e81a212430.jpg",job_title:"President",location:"Intertraffic Summit Theatre 4",sessions:["intertrafficams20240023","intertrafficams20240035"]},{company_name:"Swarco",description:"As an Innovation Manager at SWARCO, Itir Coskun focuses on new trends in the mobility field in order to develop future-proof solutions in the context of ITS. She especially works in the areas of CCAM, MaaS, Multi-modal and Sustainable Mobility Solutions. Holding a Master of Science degree in Transportation Systems with the focus on ITS, Itir Coskun is still involved in academic activities and continues to learn and share knowledge internationally. With her academic background and experiences from several interdisciplinary and international projects, she is dedicated to shape the future of mobility that is sustainable and inclusive for all.",full_name:"Itir Coskun",id:"spkintertrafficams20240027",image_url:"https://www.intertraffic.com/amsterdam/-/media/81ae1baebd9d4e09b09620ae783bcbdf.jpg",job_title:"Regional Innovation Manager",location:"ITSUP Arena",sessions:["intertrafficams20240033","intertrafficams20240196"]},{company_name:"Studio Bereikbaar",full_name:"Roland Kager",id:"spkintertrafficams20240031",image_url:"https://www.intertraffic.com/amsterdam/-/media/f4306023afca4036ab53c800764bbd72.jpg",job_title:"Data analist of mobility",location:"Intertraffic Summit Theatre 2",sessions:["intertrafficams20240034"]},{company_name:"IEM SA",full_name:"Emmanuelle Durand",id:"spkintertrafficams20240038",image_url:"https://www.intertraffic.com/amsterdam/-/media/ce2d45838e8745b5b29fdbacd26956b9.jpg",job_title:"Sales Marketing Manager",location:"Intertraffic Summit Theatre 4",sessions:["intertrafficams20240044"]},{company_name:"Vitronic GmbH",description:"Solution Manager at Vitronic. Simon Griffiths is a professional in the field of technology and innovation, currently serving as Solution Manager at VITRONIC in Germany. In this role, he spearheads the development of end-to-end solutions tailored for VITRONIC's customers, with a keen emphasis on cutting-edge technologies such as Machine Vision and Artificial Intelligence. With a rich background as a Technical Director and Chief Technology Officer, Simon brings a wealth of global experience, having lived and worked in the United States, China and Germany. His more than 30-year career has been dedicated to product development and research, showcasing his versatility and proficiency in the ever-evolving tech landscape, specifically focusing on Intelligent Transport Systems (ITS) for the past 15 years.",full_name:"Simon Griffith",id:"spkintertrafficams20240043",image_url:"https://www.intertraffic.com/amsterdam/-/media/f953de536a114643b9d78eb06c3eb2c9.jpg",job_title:"Solution Manager",location:"Intertraffic Summit Theatre 1",sessions:["intertrafficams20240048"]}]}}]);