import { motion } from "framer-motion";
import {CheckCircle2, XCircle} from 'lucide-react'

const ComparisonCard = ({data}) =>{
    const isGroowiq = data.type === "new"

return (
<motion.div
whileHover={{
y:-8,
scale:1.02,
}}

transition={{
type:"spring",
stiffness:220,
damping:18,
}}

className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl p-8 lg:p-10 transition-all duration-500

${
isGroowiq ? `bg-[#0F1039] border-[#D5D93B]/20 hover:border-[#D5D93B] hover:shadow-[0_0_60px_rgba(213, 217, 59, .18)]`
:
`bg-white/80 dark:bg-[#181B4D] border-slate-200 dark:border-white/10`
}
`}
>

<div
className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(213,217,59,.18),transparent_60%)]"
/>

<div
className="absolute
-left-full
 top-0
 h-full
 w-[55%]
 rotate-12
 bg-gradient-to-r
 from-transparent
 via-white/25
 to-transparent
 transition-all
 duration-1000
 group-hover:left-[170%]
"
/>

<div
className="
absolute
-top-24
-right-24
h-72
w-72
rounded-full
bg-[#D5D93B]/10
blur-[120px]
transition-all
duration-700
group-hover:bg-[#D5D93B]/20
"
/>

<div className="relative z-10 flex items-center justify-between">

<h3
className={`text-3xl font-black
${
isGroowiq
?
"text-white"
:
"text-[#0F1039] dark:text-white"
}
`}
>

{data.title}

</h3>

{
isGroowiq && (

<span
className="rounded-full border border-[#D5D93B]/30 bg-[#D5D93B]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#D5D93B]"
>

{data.badge}

</span>

)}
    
</div>

<div
className="relative z-10 my-8 h-px bg-gradient-to-r from-transparent via-[#D5D93B]/30 to-transparent"
/>

<div className="relative z-10 space-y-7">

{data.points.map((item, index)=>(
    <div 
    key={item.title}
className="flex gap-4"
>
    

<div
className={`mt-1
${
isGroowiq
?
"text-[#D5D93B]"
:
"text-red-400"
}
`}
>

{
isGroowiq
?
<CheckCircle2 size={22}/>
:
<XCircle size={22}/>
}

</div>
<div>

<h4
className={`font-semibold text-lg
${
isGroowiq
?
"text-white"
:
"text-[#0F1039] dark:text-white"
}
`}
>

{item.title}

</h4>

<p
className={`mt-1 leading-7

${
isGroowiq
?
"text-gray-300"
:
"text-slate-600 dark:text-slate-400"
}
`}
>

{item.desc}

</p>

</div>
</div>

))}

</div>
</motion.div>
 );
};

export default ComparisonCard