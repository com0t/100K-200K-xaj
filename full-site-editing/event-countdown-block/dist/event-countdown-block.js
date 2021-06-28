!function(){"use strict";var e={119:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},394:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(119);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},861:function(){},66:function(){},829:function(e,t,n){var r=n(27),i=n(947),o=n(163),l=n(997),a=n(515),__=o.__;t.Z=function(e){var t=e.attributes,n=e.setAttributes,o=e.className,u=(0,i.__experimentalGetSettings)(),c=__("Choose Date","full-site-editing");return t.eventDate&&(c=(0,i.dateI18n)(u.formats.datetimeAbbreviated,t.eventDate)),(0,r.createElement)(l.Placeholder,{label:__("Event Countdown","full-site-editing"),instructions:__("Count down to an event. Set a title and pick a time and date.","full-site-editing"),icon:(0,r.createElement)(a.p,null),className:o},(0,r.createElement)("div",null,(0,r.createElement)("strong",null,__("Title:","full-site-editing")),(0,r.createElement)("br",null),(0,r.createElement)("input",{type:"text",value:t.eventTitle,onChange:function(e){return n({eventTitle:e.target.value})},placeholder:__("Event Title","full-site-editing"),className:"event-countdown__event-title","aria-label":__("Event Title","full-site-editing")})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,__("Date:","full-site-editing")),(0,r.createElement)("br",null),(0,r.createElement)(l.Dropdown,{position:"bottom left",renderToggle:function(e){var t=e.onToggle,n=e.isOpen;return(0,r.createElement)(l.Button,{onClick:t,"aria-expanded":n,"aria-live":"polite",isSecondary:!0},c)},renderContent:function(){return(0,r.createElement)(l.DateTimePicker,{key:"event-countdown-picker",onChange:function(e){return n({eventDate:e})},currentDate:t.eventDate})}})))}},515:function(e,t,n){n.d(t,{p:function(){return o}});var r=n(27),i=n(997),o=function(){return(0,r.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,r.createElement)(i.Path,{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}))}},196:function(e,t,n){var r=n(394),i=n(314),o=n(163),l=n(515),a=n(829),u=n(674),__=(n(861),n(66),o.__);(0,i.registerBlockType)("jetpack/event-countdown",{title:__("Event Countdown","full-site-editing"),description:__("Count down to your favorite next thing, and celebrate with fireworks when the time is right!","full-site-editing"),icon:l.p,category:"widgets",supports:{align:["wide","full"]},example:{attributes:{eventDate:"2024-04-08T11:38:32",eventTitle:"Total Solar Eclipse"}},attributes:{eventTitle:{type:"string",source:"text",selector:".event-countdown__event-title"},eventDate:{type:"string"}},edit:function(e){return e.isSelected?(0,a.Z)(e):(0,u.Z)((0,r.Z)((0,r.Z)({},e),{},{isEditView:!0}))},save:u.Z})},674:function(e,t,n){var r=n(27),i=n(163),__=i.__,_x=i._x;t.Z=function(e){var t=e.attributes,n=e.className,i="&nbsp;",o="&nbsp;",l="&nbsp;",a="&nbsp;";if(e.isEditView){i=o=l=a=0;var u=new Date(t.eventDate).getTime()-Date.now();if(u>0){var c=Math.round(u/1e3);c-=24*(i=Math.floor(c/86400))*60*60,c-=60*(o=Math.floor(c/3600))*60,a=c-=60*(l=Math.floor(c/60))}}return(0,r.createElement)("div",{className:n},(0,r.createElement)("div",{className:"event-countdown__date"},t.eventDate),(0,r.createElement)("div",{className:"event-countdown__counter"},(0,r.createElement)("p",null,(0,r.createElement)("strong",{className:"event-countdown__day"},i)," ",_x("days","Countdown days remaining","full-site-editing")),(0,r.createElement)("p",null,(0,r.createElement)("span",null,(0,r.createElement)("strong",{className:"event-countdown__hour"},o)," ",_x("hours","Countdown hours remaining","full-site-editing")),(0,r.createElement)("span",null,(0,r.createElement)("strong",{className:"event-countdown__minute"},l)," ",_x("minutes","Countdown minutes remaining","full-site-editing")),(0,r.createElement)("span",null,(0,r.createElement)("strong",{className:"event-countdown__second"},a)," ",_x("seconds","Countdown seconds remaining","full-site-editing"))),(0,r.createElement)("p",null,__("until","full-site-editing"))),(0,r.createElement)("div",{className:"event-countdown__event-title"},(0,r.createElement)("p",null,t.eventTitle)))}},314:function(e){e.exports=window.wp.blocks},997:function(e){e.exports=window.wp.components},947:function(e){e.exports=window.wp.date},27:function(e){e.exports=window.wp.element},163:function(e){e.exports=window.wp.i18n}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);n(196)}(),window.EditingToolkit=r}();