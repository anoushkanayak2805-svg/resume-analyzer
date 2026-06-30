export default function SkillsCard({ title, skills }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-5">

                {title}

            </h2>

            <div className="flex flex-wrap gap-3">

                {

                    skills.length===0 ?

                    <p>No Data</p>

                    :

                    skills.map((skill,index)=>(

                        <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                            {skill}

                        </span>

                    ))

                }

            </div>

        </div>

    )

}