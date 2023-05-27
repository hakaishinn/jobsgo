import FormManagerJob from '~/components/recruiter/formManagerJob';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function JobPending() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'pending'} className="col-span-1"></Sidebar>
                <FormManagerJob
                    tab={'pending'}
                    title={'Việc làm đang chờ duyệt'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerJob>
            </div>
        </>
    );
}

export default JobPending;
