import Footer from '~/components/candidate/footer';
import Header from '~/components/candidate/header';
import ListJobSearch from '~/components/candidate/listJobSearch';
import Search from '~/components/candidate/search';
import ItemSearchJob from '~/components/candidate/search/itemSearchJob';

function SearchJob() {
    return (
        <>
            <Header></Header>
            <Search className={'container mt-[85px] mx-auto border-2 border-sky-700 rounded-full'}></Search>
            <ItemSearchJob></ItemSearchJob>
            <ListJobSearch></ListJobSearch>
            <Footer></Footer>
        </>
    );
}

export default SearchJob;
