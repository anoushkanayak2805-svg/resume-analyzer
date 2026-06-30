export default function SuggestionCard({ suggestions }) {

    return(

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-5">

                AI Suggestions

            </h2>

            <ul className="space-y-4">

            {

                suggestions.length===0 ?

                <li>No Suggestions</li>

                :

                suggestions.map((item,index)=>(

                    <li key={index}>

                        ✅ {item}

                    </li>

                ))

            }

            </ul>

        </div>

    )

}