import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { Banner } from './Banner';
import { bannerSlider } from '../data';


function Dashboard() {
  return (
    <>
      <Header />
      <Banner data={bannerSlider} />
      <Body />
      <Footer />
    </>
  );
}

export default Dashboard;
