import{W as d,r as p,j as s,a as l}from"./app-ilU4SQHZ.js";import{G as c}from"./GuestLayout-YmaN8chb.js";import{I as u}from"./InputError-kdaJG-cL.js";import{I as f}from"./InputLabel-OCQm-DpC.js";import{P as x}from"./PrimaryButton-wmEB1KdA.js";import{T as w}from"./TextInput-R2Cln3le.js";import"./ApplicationLogo-nqrelYAb.js";function P(){const{data:a,setData:e,post:t,processing:o,errors:m,reset:i}=d({password:""});p.useEffect(()=>()=>{i("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{P as default};
