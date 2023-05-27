import JobItem from '../slider/jobItem';

function ListJobSearch() {
    return (
        <div className="container m-auto">
            <p className="uppercase p-2 font-semibold bg-slate-300 mt-8 container m-auto">Danh sách công việc</p>
            <div className="grid grid-cols-3 gap-1 mt-4">
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
                <JobItem className="hover:shadow-md hover:bg-slate-50"></JobItem>
            </div>
        </div>
    );
}

export default ListJobSearch;
