import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function Dashboard(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-slate-100 min-h-screen">

<Topbar/>

<div className="p-10">

<h2 className="text-5xl font-bold">

Welcome 👋

</h2>

<p className="mt-3 text-gray-500">

Let's analyze your resume.

</p>

</div>

</div>

</div>

)

}