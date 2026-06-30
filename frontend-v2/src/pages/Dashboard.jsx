import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import UploadCard from "../components/upload/UploadCard";
import PDFViewer from "../components/pdf/PDFViewer";

export default function Dashboard() {

  const [pdf, setPdf] = useState(null);

  function uploadResume(file){

      if(!file) return;

      setPdf(URL.createObjectURL(file));

  }

  return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-slate-100">

<Navbar/>

<div className="grid grid-cols-12 gap-8 p-8">

<div className="col-span-4">

<UploadCard uploadResume={uploadResume}/>

</div>

<div className="col-span-8">

<PDFViewer pdf={pdf}/>

</div>

</div>

</div>

</div>

)

}