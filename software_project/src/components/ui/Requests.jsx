import React from 'react'

function Requests() {
    return (

        <div className="overflow-x-auto w-full border border-black rounded-sm ">
            <table className="table text-white text-lg">
                {/* head */}
                <thead className='text-orange-400  text-xl text-center'>
                    <tr>
                        <th>User Name</th>
                        <th>Book</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/book.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Harry Potter
                            <br />
                            <span className="badge badge-ghost badge-sm">J.K. Rowling</span>
                        </td>
                        <th className='flex h-20 justify-center items-center gap-6'>
                            <button className="btn btn-success btn-xs">ACCEPT</button>
                            <button className="btn btn-error btn-xs ">REJECT</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/book.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Brice Swyre</div>
                                    <div className="text-sm opacity-50">China</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Dune
                            <br />
                            <span className="badge badge-ghost badge-sm">Frank Herbert</span>
                        </td>
                        <th className='flex h-20 justify-center items-center gap-6'>
                            <button className="btn btn-success btn-xs">ACCEPT</button>
                            <button className="btn btn-error btn-xs ">REJECT</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/book.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Marjy Ferencz</div>
                                    <div className="text-sm opacity-50">Russia</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Physics
                            <br />
                            <span className="badge badge-ghost badge-sm">Jafor Iqbal</span>
                        </td>
                        <th className='flex h-20 justify-center items-center gap-6'>
                            <button className="btn btn-success btn-xs">ACCEPT</button>
                            <button className="btn btn-error btn-xs ">REJECT</button>
                        </th>
                    </tr>
                    </tbody>

            </table>
        </div>

    )
}

export default Requests