import FormManagerJob from '~/components/recruiter/formManagerJob';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function JobExpired() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'expired'} className="col-span-1"></Sidebar>
                <FormManagerJob
                    tab={'expired'}
                    title={'Việc làm đã hết hạn'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerJob>
            </div>
        </>
    );
}

export default JobExpired;
