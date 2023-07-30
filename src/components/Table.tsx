import { ITableHeaders } from "../interfaces"
import { dateTransform } from "../utilities"

interface tableProps<T> {
    data: T,
    headers: ITableHeaders[],
    showData: any,
    deleteData: any,
    editData: any,
    prevPage: any,
    nextPage: any,
}
const Table = <T extends object>({ data, headers, deleteData, editData, showData, nextPage, prevPage }: tableProps<T>) => {

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            {
                                headers.map(header => (
                                    <th key={header.key} scope="col" className="px-6 py-4 font-medium text-gray-900">{header.label}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {
                            // @ts-ignore
                            data.rows.map((row: any) => (
                                <tr className="hover:bg-gray-50" key={row.id}>
                                    {
                                        headers.map((header: ITableHeaders) => (
                                            (header.key.includes('date') || header.key.includes('At')) ?
                                                <td key={header.key} className="px-6 py-4">{dateTransform(row[header.key])}</td>
                                                :
                                                <td key={header.key} className="px-6 py-4">{row[header.key]}</td>
                                        ))
                                    }
                                    <td className="px-6 py-4">
                                        <div className="flex justify-left gap-4">
                                            <button onClick={() => showData(row)} x-data="{ tooltip: 'Edite' }" >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>

                                            </button>
                                            <button onClick={() => editData(row)} x-data="{ tooltip: 'Edite' }" >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                    x-tooltip="tooltip"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </button>
                                            <button onClick={() => deleteData(row)} x-data="{ tooltip: 'Delete' }" >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                    x-tooltip="tooltip"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-end">

                    <button disabled={
                        // @ts-ignore
                        data.currentPage === data.firstPage
                        // @ts-ignore
                    } onClick={() => prevPage(data.currentPage - 1)} className="my-2 mr-2 p-2 font-bold border-2 border-cyan-500 text-white bg-cyan-800">Prev Page</button>
                    <button disabled={
                        // @ts-ignore
                        data.currentPage === data.lastPage
                        // @ts-ignore
                    } onClick={() => nextPage(data.currentPage + 1)} className="my-2 mr-2 p-2 font-bold border-2 border-cyan-500 text-white bg-cyan-800">next Page</button>
                </div>
            </div>
        </>
    )
}
export default Table