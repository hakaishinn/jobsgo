import FormManagerCandidate from '~/components/recruiter/formManagerCandidate';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function CandidateDenied() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'denied'} className="col-span-1"></Sidebar>
                <FormManagerCandidate
                    tab={'denied'}
                    title={'Danh sách ứng viên bị từ chối'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerCandidate>
            </div>
        </>
    );
}

export default CandidateDenied;
