import{a as d,d as l,c as s,t as r,P as o}from"./index-CjZb1nI3.js";const c=l.button.withConfig({displayName:"StyledButton",componentId:"sc-1er3ljn-0"})(["height:40px;border-radius:8px;padding:0 14px;transition:all var(--transition);line-height:1;border:1px solid var(--border);&.list{color:",";background-color:",";&:hover,&:focus,&.active{",";}}&.group{color:",";background-color:var(--widget);&:hover,&:focus,&.active{",";}}"],r("theme",{light:"var(--highlight)",dark:"var(--text)"}),r("theme",{light:"var(--widget)",dark:"var(--border)"}),r("theme",{light:`
            filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));
            border-color: var(--widget);
        `,dark:`
            background-color: var(--widget);
            border-color: var(--widget);
            box-shadow: 0 1px 8px rgba(33, 33, 33, 0.1);
            color: var(--accent);
        `}),r("theme",{light:"var(--olive)",dark:"var(--accent)"}),r("theme",{light:`
            filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));
            border-color: var(--widget);
        `,dark:`
            background-color: var(--border);
        `})),n=({text:e,onClick:t,active:a,type:i="list"})=>d.jsx(c,{className:s(`${i} h4`,{active:a}),onClick:t,children:e});n.propTypes={text:o.string.isRequired,onClick:o.func.isRequired,active:o.bool.isRequired,type:o.oneOf(["list","group"])};export{n as S};
