"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5909],{"./src/stories/company-profile/company-exhibitor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Schema:()=>Schema,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),company_profile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/company-profile/dist/index.mjs"),company_profile_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/company-profile-data/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"RAI/Company Profile/CompanyExhibitor",component:company_profile__WEBPACK_IMPORTED_MODULE_1__.sV,tags:["autodocs","company-profile"],args:{firstLetterFilter:company_profile_data__WEBPACK_IMPORTED_MODULE_2__.F8,optionalFilterOptions:[{value:"value1",label:"Label1"}],onRequestData:async(hostname,filter,optionalFilter,sort,search,pageToLoad)=>(await new Promise((resolve=>{setTimeout((()=>{resolve()}),3e3)})),{...company_profile_data__WEBPACK_IMPORTED_MODULE_2__.eu,exhibitors:company_profile_data__WEBPACK_IMPORTED_MODULE_2__.eu.exhibitors.map((e=>({...e,name:`PAGE: ${pageToLoad} - ${e.name}`})))}),premiumExhibitors:company_profile_data__WEBPACK_IMPORTED_MODULE_2__.eu.exhibitors,currentLanguage:"en",placeholderLogo:"https://assets-prd.raicore.com/amsterdam/-/media/project/rai-amsterdam/intertraffic/logo/itd-logo/internal/ita-intertraffic-logo.png?h=62&iar=0&w=300&rev=5a3701f6ef31471baf506db9c72e5660&hash=100134F472536BE089E36E3D354AB063",params:{ShowAllImages:!0,ShowPremium:!0,ShowSearch:!0,ShowCategory:!0,ShowAlphabetFilter:!0,ShowStandNumbers:!0,ShowCountry:!0,ShowDescription:!0,MobileLayout:"two-column-mobile",ListingPage:"Paging"}},parameters:{actions:{argTypesRegex:"^on.*"},rootAttributesTooltip:!0}},Schema={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-row  space-x-2 items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(company_profile__WEBPACK_IMPORTED_MODULE_1__.sV,{...args})})})})},__namedExportsOrder=["Schema"];Schema.parameters={...Schema.parameters,docs:{...Schema.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <>\r\n        <div>\r\n          <div className="flex flex-row  space-x-2 items-center">\r\n            <CompanyExhibitor {...args} />\r\n          </div>\r\n        </div>\r\n      </>;\n  }\n}',...Schema.parameters?.docs?.source}}}}}]);