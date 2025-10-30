// ✅ All imports must be at the top
import React from 'react';

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import '../css/animate.css';
import '../icon/icomoon/style.css';


// Components
import Slider from '../components/Slider';
import CollectionSlider from '../components/CollectionSlider';
import ShopByCategories from '../components/ShopByCategories';
import ThemesFlat from '../components/ThemesFlat';
import Cloth from '../components/Cloth';
import InstagramSection from '../components/InstagramSection';
import ArtificialJewellery from '../components/ArtificialJewellery';
import Testimonial from '../components/Testimonial';
import Policies from '../components/Policies';

function Home() {
  return (
    <>
      <Slider />
      <CollectionSlider />
      <ShopByCategories />
      <ThemesFlat />
      <ArtificialJewellery />
      <Cloth />
      <Testimonial />
      <Policies />
      <InstagramSection />
    </>
  );
}

export default Home;
