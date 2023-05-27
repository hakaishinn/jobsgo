import Header from '~/components/recruiter/header';
import SearchCandidate from '~/components/recruiter/searchCandidate';
import Sidebar from '~/components/recruiter/sidebar';

function SearchCandidatePage() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'search'} className="col-span-1"></Sidebar>
                <SearchCandidate
                    tab={'search'}
                    title={'Kết quả tìm kiếm'}
                    className="col-span-4 text-sm border-l"
                ></SearchCandidate>
            </div>
        </>
    );
}

export default SearchCandidatePage;
