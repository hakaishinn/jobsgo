import Header from '~/components/recruiter/header';
import JobDetail from '~/components/recruiter/jobDetail';
import Sidebar from '~/components/recruiter/sidebar';

function JobDetailPage() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar className="col-span-1"></Sidebar>
                <JobDetail className="col-span-4 text-sm border-l"></JobDetail>
            </div>
        </>
    );
}

export default JobDetailPage;
