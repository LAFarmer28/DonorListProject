import { Route, Routes, } from 'react-router-dom';
import {  DONOR_LIST, DONOR_CTN  } from './routeStrings';
import DonorList from '../Donor/DonorList';
import DonorCtn from '../Donor/DonorCtn';
import Dashboard from '../KSDashboard/Dashboard';


const MainPageRouter = () => {


  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
     <Route
          index
          path={DONOR_LIST}
          element={
                <DonorList />
          }
        />
     <Route
          index
          path={DONOR_CTN}
          element={
                <DonorCtn />
          }
        />
      </Route>
    </Routes>


  )
}

export default MainPageRouter