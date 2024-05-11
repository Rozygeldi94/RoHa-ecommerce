import{w as z,v as D,r as c,x as o,j as s,B as f,q as v,k as _,y as U,z as H,n as K,A as N,I as Q,T as x,p as q,F as t,D as V,E as X,M as J,V as Y,H as Z,J as M,K as u,N as p,O as C,Q as P,R,S as ee,U as se,W as le,X as ie,Y as xe}from"./index-ncBYH8F9.js";import{u as ne}from"./useDocumentTitle-Bmz6XeXz.js";const ae=({shoppingCartProduct:e})=>{const{addToStore:n,decrementProductCount:i}=z(),r=D(l=>l.shoppingCard.shoppingCartProducts);c.useEffect(()=>{o(r,"shopping_cart")},[r]);const h=l=>()=>{n(l)},T=l=>()=>{i(l)};return s.jsxs(f,{minWidth:{base:"65px",lg:"90px"},height:{base:"26px",lg:"33px"},display:"flex",alignItems:"center",bg:"#b2b3c2",borderRadius:"3px",border:"1px #dbd0d0 solid",children:[s.jsx(v,{minWidth:{base:"18px",lg:"24px"},width:{base:"18px",lg:"24px"},height:"100%",borderRadius:"0",padding:"0",fontSize:"1.2rem",color:"#000",cursor:(e==null?void 0:e.quantity)===1?"default":"pointer",bg:(e==null?void 0:e.quantity)===1?"#f7f5f5":"#edf2f7",_hover:{bg:(e==null?void 0:e.quantity)===1?"#f7f5f5":"#dfe2f0"},isDisabled:!(e!=null&&e.isCheckboxActive),onClick:T(e),children:"-"}),s.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"#000",bg:"#d3d4df",flexGrow:"1",children:s.jsx("span",{children:e==null?void 0:e.quantity})}),s.jsx(v,{minWidth:{base:"18px",lg:"24px"},width:{base:"18px",lg:"24px"},height:"100%",borderRadius:"0",padding:"0",fontSize:"1.2rem",color:"#000",cursor:(e==null?void 0:e.quantity)===20?"default":"pointer",bg:(e==null?void 0:e.quantity)===20?"#f7f5f5":"#edf2f7",_hover:{bg:(e==null?void 0:e.quantity)===20?"#f7f5f5":"#dfe2f0"},isDisabled:!(e!=null&&e.isCheckboxActive),onClick:h(e),children:"+"})]})},te=({shoppingCartProduct:e,handleDelete:n})=>{const[i]=_("(min-width: 960px)");return s.jsx(v,{minW:{md:"21px",lg:"23px",xl:"25px"},width:{md:"21px",lg:"23px",xl:"25px"},height:{md:"21px",lg:"23px",xl:"25px"},padding:"0",bg:"none",_hover:{bg:"none"},isDisabled:!(e!=null&&e.isCheckboxActive),onClick:n,children:s.jsx(U.Provider,{value:{color:"light",style:{width:i?"20px":"18px",height:i?"20px":"18px",cursor:e!=null&&e.isCheckboxActive?"pointer":"not-allowed"}},children:s.jsx(s.Fragment,{children:s.jsx(H,{})})})})},fe=({shoppingCartProduct:e})=>{var S;const{colorMode:n}=K(),{removeProduct:i,changeCheckboxStatus:r}=z(),[h]=_("(min-width: 500px)"),T=D(d=>d.shoppingCard.shoppingCartProducts),l=()=>{confirm(`Do you wanna remove this product?! 
Product name: ${e==null?void 0:e.title}`)===!0&&(i(e==null?void 0:e.id),o([],"shopping_cart"))};return c.useEffect(()=>{o(T,"shopping_cart")},[T]),s.jsx(f,{display:"flex",gap:{sm:"20px",xl:"40px"},alignItems:"center",padding:"15px 20px",bg:n==="light"?"#fff":"#372e3e",border:"2px solid #201e1d1f",opacity:(e==null?void 0:e.isCheckboxActive)===!0?1:.4,boxShadow:n==="light"?"rgba(99, 99, 99, 0.2)0px 2px 8px 0px":"rgba(236, 218, 218, 0.36)0px 1px 3px 0px",children:s.jsxs(f,{display:"flex",gap:{base:"0",isLargerThan440:"30px"},alignItems:"center",flexGrow:"1",children:[s.jsx(N,{isChecked:e==null?void 0:e.isCheckboxActive,onChange:()=>{r(e)}}),s.jsx(Q,{w:"50px",m:{base:"0 20px 0 10px",isLargerThan440:"0"},src:(S=e==null?void 0:e.images)==null?void 0:S[0]}),s.jsxs(f,{flexGrow:"1",children:[(e==null?void 0:e.isCheckboxActive)===!0?s.jsx(x,{as:q,to:`//roha-ecommerce/${e==null?void 0:e.category}/${e==null?void 0:e.id}/${e==null?void 0:e.title}`,fontSize:{md:"1rem",lg:"1.1rem",xl:"1.2rem"},cursor:"pointer",textOverflow:"ellipsis",fontWeight:"600",children:e==null?void 0:e.title}):s.jsx(x,{as:"p",fontSize:{md:"1rem",lg:"1.1rem",xl:"1.2rem"},cursor:"text",textOverflow:"ellipsis",fontWeight:"600",children:e==null?void 0:e.title}),s.jsxs(t,{mt:"10px",alignItems:"center",justifyContent:h?"space-between":"end",children:[h&&s.jsxs(x,{children:["Stock: ",e==null?void 0:e.stock]}),s.jsxs(t,{alignItems:"center",gap:"10px",children:[s.jsxs(x,{minW:"60px",mb:"5px",color:"red",fontSize:{base:"1rem",lg:"1.1rem",xl:"1.2rem"},fontWeight:"600",textAlign:"center",children:[e==null?void 0:e.price," TL"]}),s.jsx(ae,{shoppingCartProduct:e}),s.jsx(te,{shoppingCartProduct:e,handleDelete:l})]})]})]})]})})},me=()=>{const{saveActivatedPromoCode:e,isSaveLoading:n,activatedPromo:i,getActivatedPromoCode:r,deleteActivatedPromoCode:h,isDeleteLoading:T}=V(),{currentMonthPromo:l,getCurrentMonthPromo:S}=X(),{authUser:d,colorMode:k}=c.useContext(J),{getTotal:E}=z(),[m,g]=c.useState(!1),[y,L]=c.useState({title:"",status:!1}),A=D(j=>j.shoppingCard),[w,I]=c.useState(""),a=+(A==null?void 0:A.cardTotalAmount.toPrecision(4)),b=d&&a>150||a===0?0:d?25:0;c.useEffect(()=>{E(),S(),r()},[A]),c.useEffect(()=>{i&&I(i==null?void 0:i.title),i&&g(!0)},[i]);const F=()=>d?l!=null&&l.promo_price&&(m||i)?b?a+b-(l==null?void 0:l.promo_price):a-(l==null?void 0:l.promo_price):a>=150?a-b:a+b:a===0?0:d&&Number(a+b).toPrecision(4)?Number(a+b).toPrecision(4):0,W=()=>{const j=new Date().getTime();if(!w.length){L({title:"Enter promo code!",status:!0});return}if((l==null?void 0:l.title)===w)if((l==null?void 0:l.validTo)<j)L({title:"The promo code validity period has expired!",status:!0});else{const $=se();!m&&g(!0),e(l,$),L({title:"",status:!1})}else L({title:"Invalid promo code!",status:!0})},B=()=>{m&&h(),I(""),g(!1),L({title:"",status:!1})},G=j=>{I(j.target.value),L({title:"",status:!1}),w===(i==null?void 0:i.title)&&m&&g(!1)},O=j=>{j.key==="Enter"&&W()};return s.jsxs(Y,{minWidth:{base:"200px",isLargerThan550:"550px",isLargerThan850:"200px"},padding:{base:"0 15px",isLargerThan550:"0"},gap:"20px",children:[s.jsxs(t,{width:"100%",flexDirection:{base:"column",isLargerThan550:"row",isLargerThan850:"column"},padding:"10px 15px",bg:k==="light"?"#fff":"#372e3e",border:"2px solid #201e1d1f",boxShadow:k==="light"?"rgba(99, 99, 99, 0.2)0px 2px 8px 0px":"rgba(236, 218, 218, 0.36)0px 1px 3px 0px",alignItems:"center",gap:"20px",children:[s.jsxs(f,{children:[s.jsxs(t,{gap:"5px",children:[s.jsxs(Z,{children:[s.jsx(M,{required:!0,maxLength:20,size:{base:"sm",isLargerThan700:"md"},placeholder:"Enter promo code",border:"1px #1d6cda solid",value:w,onChange:G,isDisabled:!!m,style:{paddingRight:"45px"},onKeyDown:O}),w&&s.jsx(u,{children:s.jsx(p,{isDisabled:!m,label:"Delete promo code",zIndex:"99999",children:s.jsx(f,{position:"relative",children:s.jsx(C,{cursor:"pointer",onClick:B})})})})]}),s.jsx(v,{size:{base:"sm",isLargerThan700:"md"},colorScheme:"twitter",onClick:W,isLoading:n||T,isDisabled:!!m,children:s.jsx(P,{})})]}),y!=null&&y.status?s.jsx(x,{color:"red",children:y==null?void 0:y.title}):m?s.jsx(x,{mt:"5px",color:k==="light"?"green":"#10bc10",children:"Promo code activated!"}):""]}),s.jsx(R,{orientation:{base:"horizontal",isLargerThan550:"vertical",isLargerThan850:"horizontal"},width:{base:"100%",isLargerThan550:"1px",isLargerThan850:"100%"},minHeight:{base:"1px",isLargerThan550:"100px",isLargerThan850:"1px"},bg:"blue.300"}),s.jsxs(f,{width:{base:"100%",isLargerThan550:"50%",isLargerThan850:"100%"},children:[s.jsx(x,{textAlign:"center",children:"Order summary"}),s.jsxs(t,{m:"6px 0 2px 0",justifyContent:"space-between",children:[s.jsx(x,{children:"Orders total:"}),s.jsxs(x,{as:"span",children:[d?a:0," TL"]})]}),s.jsxs(t,{mb:"6px",justifyContent:"space-between",children:[s.jsx(x,{children:"Cargo total: "}),s.jsxs(x,{as:"span",children:[b," TL"]})]}),m&&s.jsxs(t,{mb:"6px",justifyContent:"space-between",color:k==="light"?"green":"#10bc10",children:[s.jsx(x,{children:"Promo code:"}),s.jsxs(x,{as:"span",children:["- ",l==null?void 0:l.promo_price," TL"]})]}),s.jsx(R,{bg:"#ddcaca",height:"0.4px"}),s.jsx(t,{justifyContent:"center",children:s.jsxs(x,{children:["Total: ",F()," TL"]})})]})]}),s.jsxs(v,{as:q,to:ee,size:{sm:"sm",lg:"md"},width:"100%",padding:"10px 15px",colorScheme:"twitter",children:[s.jsx(x,{as:"span",fontSize:"1.4rem",fontWeight:"800",mr:"5px",children:"←"}),"Go shopping"]})]})};function be(){ne("Shopping cart | RoHa");const e=D(i=>i.shoppingCard.shoppingCartProducts),[n]=le(xe);return s.jsx(f,{maxW:"1230px",margin:"30px auto",padding:{base:"0 10px",isLargerThan440:"0 15px"},children:n&&(e!=null&&e.length)?s.jsxs(s.Fragment,{children:[s.jsx(ie,{products:e,type:"text",hasBorder:!1}),s.jsxs(t,{flexDirection:{base:"column",isLargerThan850:"row"},columnGap:"20px",children:[s.jsx(t,{flexDirection:"column",gap:"20px",flexGrow:"1",children:e==null?void 0:e.map(i=>s.jsx(fe,{shoppingCartProduct:i}))}),s.jsx(f,{mt:{base:"20px",isLargerThan850:"0"},maxWidth:{base:"100vw",isLargerThan850:"300px"},display:{base:"flex",isLargerThan850:"block"},justifyContent:"center",children:s.jsx(me,{})})]})]}):n&&(e==null?void 0:e.length)===0?s.jsx(x,{fontSize:"1.2rem",fontWeight:"500",children:"There are no items in the cart yet!"}):s.jsx(x,{textAlign:"center",fontSize:{base:"1rem",md:"1.2rem"},fontWeight:"500",children:"Please sign in!"})})}export{be as default};
