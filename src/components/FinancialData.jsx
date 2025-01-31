// FinancialData.jsx
const FinancialData = () => {
    return (
        <div className="bg-white p-4 mt-4 rounded-lg shadow">
            <h2 className="font-bold text-lg mb-2 text-blue-500">Financial Tips</h2>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2">Date</th>
                        <th className="p-2">Receiver's Name</th>
                        <th className="p-2">Account Number</th>
                        <th className="p-2">Payment Method</th>
                        <th className="p-2">Sale Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add your data rows here */}
                </tbody>
            </table>
        </div>
    );
};
export default FinancialData;
