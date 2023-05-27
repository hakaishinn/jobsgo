import FormManagerJob from '~/components/recruiter/formManagerJob';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function JobPause() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'pause'} className="col-span-1"></Sidebar>
                <FormManagerJob
                    tab={'pause'}
                    title={'Việc làm đã tạm dừng'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerJob>
            </div>
        </>
    );
}

export default JobPause;
