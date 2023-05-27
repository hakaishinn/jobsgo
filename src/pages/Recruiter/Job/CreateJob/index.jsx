import CreateJob from '~/components/recruiter/createJob';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function CreateJobPage() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar className="col-span-1"></Sidebar>
                <CreateJob className="col-span-4 text-sm border-l"></CreateJob>
            </div>
        </>
    );
}

export default CreateJobPage;
