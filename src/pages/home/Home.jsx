import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featureInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgets/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart  data={userData} title="User Anlytics" grid dataKey="Active Users"/>
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home