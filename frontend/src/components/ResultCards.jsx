import React from "react";

export default function ResultCards({
  atsScore,
  matchedSkills,
  missingSkills,
  suggestions,
}) {

  return (

<div className="space-y-6">

<div className="grid grid-cols-2 gap-5">

<div className="bg-[#111827] p-6 rounded-xl">

<h2 className="text-xl font-bold">
ATS Score
</h2>

<p className="text-6xl text-green-400 mt-5">
{atsScore}%
</p>

</div>

<div className="bg-[#111827] p-6 rounded-xl">

<h2 className="text-xl font-bold">
Matched Skills
</h2>

<div className="mt-4 flex flex-wrap gap-2">

{matchedSkills.map((skill,index)=>(

<span
key={index}
className="bg-green-700 px-3 py-1 rounded-full"
>

{skill}

</span>

))}

</div>

</div>

</div>

<div className="grid grid-cols-2 gap-5">

<div className="bg-[#111827] p-6 rounded-xl">

<h2 className="text-xl font-bold">
Missing Skills
</h2>

<div className="mt-4 flex flex-wrap gap-2">

{missingSkills.slice(0,15).map((skill,index)=>(

<span
key={index}
className="bg-red-700 px-3 py-1 rounded-full"
>

{skill}

</span>

))}

</div>

</div>

<div className="bg-[#111827] p-6 rounded-xl">

<h2 className="text-xl font-bold">
AI Suggestions
</h2>

<ul className="mt-4 space-y-2">

{suggestions.map((item,index)=>(

<li key={index}>

✅ {item}

</li>

))}

</ul>

</div>

</div>

</div>

  );

}