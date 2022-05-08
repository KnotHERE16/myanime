import {useEffect,useRef, useMemo,useState } from "react";
import Card from "../components/Card";
import {v1 as uuidv1} from 'uuid';
import Pagination from "../components/Pagination";
import mangaData  from "../pages/mymanga.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface MangaJson {
    name: string;
    status: string;
    rating: number;
}

let PageSize = 12;

const HomePage = () => {

    const [currentPageNum, setCurrentPageNum] = useState<number>(1);
    const [filterManga,setFilterManga] = useState<MangaJson[]>();

    const { status } = useParams();
    const navi = useRef(useNavigate());
                
    useEffect(() => {

        let status_type : string = "";

        switch (status) {
            case 'reading':
                status_type = "reading";
                break;
            case 'completed':
                status_type = 'read';
                break;
            case 'stalled':
                status_type = 'stalled';
                break;
            case 'waiting':
                status_type = 'want to read';
                break;
            case 'dropped':
                status_type = 'dropped';
                break;
            default:
                navi.current('/');
                setFilterManga(mangaData.entries);
                setCurrentPageNum(1);
                return;
        }

        setFilterManga(mangaData.entries.filter(({ status }) => status === status_type));
        setCurrentPageNum(1);
    },[status])

    const currentPageData = useMemo(() => {
        const startPageIndex = (currentPageNum - 1 ) * PageSize;
        const endPageIndex = startPageIndex + PageSize;
        return filterManga?filterManga.slice(startPageIndex,endPageIndex) : null;
    },[currentPageNum,filterManga]);



    //To Do
    // Get data from backend

    // const [mangaList, setmangaList]=useState<MangaJson[]>(mangaData.entries);

    
    // useEffect(() => {
    //     // const getMyManga = async () => {
    //     //     try{
    //     //         const response = await fetch('resource/mymanga.json');
    //     //         const data = await response.json()
    //     //         setmangaList(data.entries);
    //     //         setexistList(true);
            
    //     //     }catch (error) {
    //     //             setexistList(false);
    //     //     }
    //     // }

    //     // getMyManga();
    // },[]);
    return (
      <div className="bg-gray-800 ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-6">
            {currentPageData &&
              currentPageData.map((manga, index) => (
                <Card
                  key={uuidv1()}
                  name={manga.name}
                  status={manga.status}
                  rating={manga.rating}
                  imageSrc={"../anya.jpeg"}
                  imageAlt={"404 image "}
                />
              ))}
          </div>
        </div>
        <div className=" flex justify-center ">
          {filterManga && (
            <Pagination
              totalCount={filterManga.length}
              currentPage={currentPageNum}
              pageSize={PageSize}
              onPageChange={(page: number) => setCurrentPageNum(page)}
            />
          )}
        </div>
      </div>
    );
};
export default HomePage;
