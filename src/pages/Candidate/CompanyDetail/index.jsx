import CompanyDetail from '~/components/candidate/companyDetail';
import Footer from '~/components/candidate/footer';
import Header from '~/components/candidate/header';
import Search from '~/components/candidate/search';

function CompanyDetailPage() {
    return (
        <>
            <Header></Header>
            <Search className="mt-[90px] container mx-auto border-[2px] border-sky-700 rounded-full"></Search>
            <CompanyDetail></CompanyDetail>
            <Footer></Footer>
        </>
    );
}

export default CompanyDetailPage;
