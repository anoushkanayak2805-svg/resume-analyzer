import { useEffect, useState } from "react";
import {
  FaHistory,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

import api from "../../services/api";

export default function History() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {

    try {

      const res = await api.get("/history");

      setHistory(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-6">

        <FaHistory
          className="text-blue-600"
          size={24}
        />

        <h2 className="text-2xl font-bold">

          Resume History

        </h2>

      </div>

      {loading ? (

        <p className="text-gray-500">

          Loading history...

        </p>

      ) : history.length === 0 ? (

        <p className="text-gray-500">

          No previous resume analysis found.

        </p>

      ) : (

        <div className="space-y-4">

          {history.map((item, index) => (

            <div
              key={index}
              className="border rounded-xl p-5 hover:shadow-md transition duration-300"
            >

              <div className="flex justify-between items-center">

                <h3 className="font-bold text-lg">

                  Resume Analysis #{index + 1}

                </h3>

                <span className="text-sm text-gray-500">

                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString()
                    : "Recent"}

                </span>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">

                <div className="flex items-center gap-3">

                  <FaChartLine
                    className="text-green-600"
                  />

                  <div>

                    <p className="text-gray-500 text-sm">

                      ATS Score

                    </p>

                    <p className="font-bold text-xl">

                      {item.ats_score ?? 0}%

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <FaBriefcase
                    className="text-blue-600"
                  />

                  <div>

                    <p className="text-gray-500 text-sm">

                      Job Match

                    </p>

                    <p className="font-bold text-xl">

                      {item.match_score ?? 0}%

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}