(self.webpackChunk_marcioc0sta_react_donut=self.webpackChunk_marcioc0sta_react_donut||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)},"./src/components/Donut/Donut.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Donut_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),src=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/d3/src/index.js"));const useDonutCoordinates_useDonutCoordinates=function useDonutCoordinates(config){var invertData=config.invertData,donutRadius=config.donutRadius,donutInnerRadius=config.donutInnerRadius,parsedData=config.parsedData,activeArcProperties_INNER_RADIUS=function INNER_RADIUS(rad){return rad-20},activeArcProperties_OUTER_RADIUS=function OUTER_RADIUS(rad){return rad+5},radius=Math.min(donutRadius,donutRadius)/2;return{arc:src.Nb1().innerRadius(radius-donutInnerRadius).outerRadius(radius),activeArc:src.Nb1().innerRadius(activeArcProperties_INNER_RADIUS(radius)).outerRadius(activeArcProperties_OUTER_RADIUS(radius)),sectionAngles:src.ve8().value((function(data){return data.value})).sort((function(current,next){return invertData?next.rawValue-current.rawValue:current.rawValue-next.rawValue}))(parsedData)}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sectionOpacityAmount_ACTIVE="1",sectionOpacityAmount_INACTIVE="0.6",Donut=function Donut(_ref){var sectionColors=_ref.sectionColors,donutData=_ref.donutData,totalClassName=_ref.totalClassName,withTotal=_ref.withTotal,_useState2=_slicedToArray((0,react.useState)(""),2),activeSection=_useState2[0],setActiveSection=_useState2[1],_useMemo=(0,react.useMemo)((function(){return function parseData(data,donutRadius){var total=data.map((function(item){return item.value})).reduce((function(accum,current){return accum+current})),getDonutVal=function getDonutVal(val){return val*donutRadius/total};return{parsedData:data.map((function(item){return{slug:item.slug,title:item.label,value:getDonutVal(item.value),rawValue:item.value}})),total}}(donutData,140)}),[donutData]),parsedData=_useMemo.parsedData,total=_useMemo.total,_useDonutCoordinates=useDonutCoordinates_useDonutCoordinates({invertData:!1,donutRadius:140,donutInnerRadius:15,parsedData}),arc=_useDonutCoordinates.arc,activeArc=_useDonutCoordinates.activeArc,sectionAngles=_useDonutCoordinates.sectionAngles,sectionAngleColorIndex=function sectionAngleColorIndex(currentSection){return donutData.findIndex((function(item){return currentSection.data.slug===item.slug}))},handleActiveSection=function handleActiveSection(slug){return function(){setActiveSection(slug)}},handleOpacity=function handleOpacity(slug){return slug!==activeSection&&0!==activeSection.length?sectionOpacityAmount_INACTIVE:sectionOpacityAmount_ACTIVE},handleArcs=function handleArcs(active,section){return active?activeArc(section):arc(section)};return(0,jsx_runtime.jsxs)("div",{style:{position:"relative"},children:[(0,jsx_runtime.jsx)("svg",{width:"180",height:"180",children:(0,jsx_runtime.jsx)("g",{style:{transform:"translate(90px, 90px)"},children:sectionAngles.map((function(section){var _section$data$slug,_section$data,slug=null!==(_section$data$slug=null==section||null===(_section$data=section.data)||void 0===_section$data?void 0:_section$data.slug)&&void 0!==_section$data$slug?_section$data$slug:"",active=activeSection===slug;return(0,jsx_runtime.jsx)("path",{onMouseLeave:function onMouseLeave(){setActiveSection("")},onMouseEnter:handleActiveSection(slug),fillOpacity:handleOpacity(slug),fill:sectionColors[sectionAngleColorIndex(section)],d:handleArcs(active,section)||""},slug)}))})}),withTotal&&(0,jsx_runtime.jsx)("p",{className:totalClassName,style:{position:"absolute",top:"80px",left:"80px",margin:"0"},children:total})]})};Donut.displayName="Donut";const Donut_Donut=(0,react.memo)(Donut);try{Donut.displayName="Donut",Donut.__docgenInfo={description:"",displayName:"Donut",props:{sectionColors:{defaultValue:null,description:"",name:"sectionColors",required:!0,type:{name:"string[]"}},donutData:{defaultValue:null,description:"",name:"donutData",required:!0,type:{name:"DonutSectionObject[]"}},withTotal:{defaultValue:null,description:"",name:"withTotal",required:!0,type:{name:"boolean"}},totalClassName:{defaultValue:null,description:"",name:"totalClassName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Donut/Donut.tsx#Donut"]={docgenInfo:Donut.__docgenInfo,name:"Donut",path:"src/components/Donut/Donut.tsx#Donut"})}catch(__react_docgen_typescript_loader_error){}const Donut_stories={title:"Donut",component:Donut_Donut};var Template=function Template(args){return(0,jsx_runtime.jsx)(Donut_Donut,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={withTotal:!1,totalClassName:"yourClassName",sectionColors:["cyan","pink"],donutData:[{slug:"example-1",label:"A value",value:100},{slug:"example-2",label:"B value",value:300}]},Default.parameters=Object.assign({storySource:{source:"args => <Donut {...args} />"}},Default.parameters)},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Donut/Donut.stories.tsx":"./src/components/Donut/Donut.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[858],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);