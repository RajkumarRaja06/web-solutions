import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const [apiData, setApiData] = useState('');
  const [apiTwoData, setApiTwoData] = useState('');
  const [apiThreeData, setApiThreeData] = useState('');

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setApiData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const newHomeData =
      apiData && apiData.categories.filter((item) => item.idCategory > 12);
    const newRowData =
      apiData && apiData.categories.filter((item) => item.idCategory > 11);
    setApiThreeData(newRowData);
    setApiTwoData(newHomeData);
  }, [apiData]);

  return (
    <DataContext.Provider value={{ apiData, apiTwoData, apiThreeData }}>
      {children}
    </DataContext.Provider>
  );
};

const DataConsumer = () => {
  return useContext(DataContext);
};

export { DataContext, DataProvider, DataConsumer };
