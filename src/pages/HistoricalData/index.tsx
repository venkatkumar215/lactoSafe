import React from 'react'
import LactoSafeTable from '../../component/Common/Table';
import LactoSafeTab from '../../component/Common/Tabs';
import styles from './historicalData.module.scss';



const tabList = ['item1','item2','item3'];

const HistoricalData:React.FC = () => {
  return (
    <div className={styles.lactoSafe_HistoricalData_Container}>
      <LactoSafeTab tabList={tabList}></LactoSafeTab>
   
    </div>
  )
};

export default HistoricalData;
