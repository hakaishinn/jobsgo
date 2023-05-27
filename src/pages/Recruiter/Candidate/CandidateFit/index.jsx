import FormManagerCandidate from '~/components/recruiter/formManagerCandidate';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function CandidateFit() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'fit'} className="col-span-1"></Sidebar>
                <FormManagerCandidate
                    tab={'search'}
                    title={'Danh sách ứng viên phù hợp'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerCandidate>
            </div>
        </>
    );
}

export default CandidateFit;
