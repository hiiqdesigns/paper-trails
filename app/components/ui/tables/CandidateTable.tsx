import CandidateTableRow from "./CandidateTableRow";

export default function CandidateTable({
  stateName,
  legislatorList,
}: {
  stateName: string | undefined;
  legislatorList: Array<any>;
}) {
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">{stateName}</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {legislatorList.length} Representatives
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto -my-2 md:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 rounded-lg bg-gray-50">
              <table className="min-w-full divide-y divide-gray-200">
                {/* Candidate Data Table Header */}
                <thead>
                  <tr className="align-top flex w-full">
                    <th
                      scope="col"
                      className="w-1/5 px-4 py-4 text-sm font-normal text-gray-500"
                    >
                      <span>Name</span>
                    </th>

                    <th
                      scope="col"
                      className="w-1/5 py-4 pl-4 pr-12 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Chamber</span>
                    </th>

                    <th
                      scope="col"
                      className="w-1/5 px-4 py-4 text-sm font-normal text-gray-500 text-left"
                    >
                      <span>Total Contributions Received YTD</span>
                    </th>

                    <th
                      scope="col"
                      className="w-2/5 px-4 py-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Contact
                    </th>
                  </tr>
                </thead>

                {/* Candidate Data Table */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {legislatorList.length !== 0 ? (
                    legislatorList.map((candidate) => {
                      const candLegisData = candidate["@attributes"];

                      return (
                        <CandidateTableRow
                          key={candLegisData.cid}
                          {...candLegisData}
                        />
                      );
                    })
                  ) : (
                    <div className="min-h-full h-[60vh] flex gap-1 items-center justify-center">
                      <span className="mr-2">Loading Legislators</span>
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Table header sorting button */
}
{
  /* <button className="ml-[4.5rem] flex items-baseline gap-x-2 text-left">
  <svg
    className="h-3 w-3"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.1"
    />
    <path
      d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.1"
    />
    <path
      d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
  </svg>
</button>; */
}
