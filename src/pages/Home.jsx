import { Image } from "react-bootstrap";
import Header from "../components/common/header"
import addIcon from '../assets/add.png'
import BoxWithShadow from "../components/StyleComponents/CardBoxShadow";
const images = [
    "https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/15/22/08/person-5747420_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",
  
    "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/15/22/08/person-5747420_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",
  
    "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/15/22/08/person-5747420_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",
  
    "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg"
  ];
function Home() {
    
  return (
    <div>
        <Header title={'Image Library'}/>
        <div className="d-flex gap-2 flex-wrap py-2">
            {
                images && images?.map((item, index) => (
                    <Image key={index} src={item} rounded width={'100px'} height={'100px'} />
                ))
            }
            <div className="rounded d-flex justify-content-center align-items-center " style={{width: '100px', height: '100px', background: '#F5F5F5'}}>
                <Image src={addIcon} rounded width={'100px'} height={'100px'} style={{padding: '20px'}} /> 
            </div>
        </div>
    </div>
  )
}

export default Home