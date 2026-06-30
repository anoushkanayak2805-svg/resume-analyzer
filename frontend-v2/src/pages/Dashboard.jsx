import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import UploadCard from "../components/upload/UploadCard";
import PDFViewer from "../components/pdf/PDFViewer";

import ATSCard from "../components/cards/ATSCard";
import MatchCard from "../components/cards/MatchCard";

import api from "../services/api";

export default function Dashboard() {

  const [resumeText, setResumeText] = useState("");

  const [pdf, setPdf] = useState(null);

  const [loading, setLoading] = useState(false);

  const [ats, setATS] = useState(0);

  const [match, setMatch] = useState(0);

  async function uploadResume(file){

      if(!file) return;

      setPdf(URL.createObjectURL(file));

      const form=new FormData();

      form.append("resume",file);

      try{

          const res=await api.post("/upload",form);

          setResumeText(res.data.text);

          alert("Resume Uploaded Successfully");

      }catch(err){

          console.log(err);

          alert("Upload Failed");

      }

  }

  async function analyzeResume(){

      const job=prompt("Paste Job Description");

      if(!job) return;

      setLoading(true);

      try{

          const res=await api.post("/ai",{

              resume:resumeText,

              job

          });

          setATS(res.data.ats_score);

          setMatch(res.data.match_score);

      }

      catch(err){

          console.log(err);

      }

      setLoading(false);

  }

  return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-slate-100 min-h-screen">

<Navbar/>

<div className="grid grid-cols-12 gap-8 p-8">

<div className="col-span-4">

<UploadCard onUpload={uploadResume}/>

<button
onClick={analyzeResume}
className="mt-6 w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700">

{loading?"Analyzing...":"Analyze Resume"}

</button>

<div className="mt-8">

<ATSCard score={ats}/>

</div>

<div className="mt-8">

<MatchCard score={match}/>

</div>

</div>

<div className="col-span-8">

<PDFViewer pdf={pdf}/>

</div>

</div>

</div>

</div>

);

}