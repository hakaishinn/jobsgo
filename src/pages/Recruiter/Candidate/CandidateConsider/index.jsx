import FormManagerCandidate from '~/components/recruiter/formManagerCandidate';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function CandidateConsider() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'consider'} className="col-span-1"></Sidebar>
                <FormManagerCandidate
                    tab={'consider'}
                    title={'Danh sách ứng viên đang xem xét'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerCandidate>
            </div>
        </>
    );
}

export default CandidateConsider;
