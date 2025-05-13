import { useCallback, useMemo, useState } from "react";
import {
  DataGrid,
  Column,
  Pager,
  Scrolling,
  Paging,
  FilterRow,
  DataGridTypes,
  Selection,
  StateStoring,
  Toolbar,
  Item,
  LoadPanel
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import { LoadOptions } from "devextreme/common/data";
import { DonorShortModel } from "./types.ts"; 
import { useNavigate } from "react-router-dom";
import { DONOR_CTN } from "../Router/routeStrings.ts";
import { fetchDonorData } from "./data.ts";

const DonorList = () => {

  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState<DonorShortModel | null>(null);
  const allowedPageSizes = [10, 20, 50];
  const STORAGE_KEY = "donorList";



  // grid row selection stored to state
  const onSelectionChanged = useCallback(({ selectedRowsData }: DataGridTypes.SelectionChangedEvent) => {
    console.log('onSelectionChanged', selectedRowsData);
    setSelectedRow(selectedRowsData[0]);
  }, []);  

  // devextreme store creation
 
  const donorStore = useMemo(() => {
    return new CustomStore({
      key: "DonorId",
      cacheRawData: false,
      load: async (loadOptions: LoadOptions) => {
  
        try {
          const result = await fetchDonorData();
          return {
            data: result.data,
            totalCount: result.totalCount,
          };
        } catch (err) {
          console.error("Error fetching donor data", err);
          return {
            data: [],
            totalCount: 0
          };
        }
      },
    });
  }, []);

  const createBtnOptions = useMemo(
    () => ({
      icon: "add",
      text: "Create",
      onClick: () => {
        navigate(DONOR_CTN);
      },
      stylingMode: "contained",
    }),
    [navigate]
  );





  return (
    <div>
      <DataGrid
        dataSource={donorStore}
        showBorders={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        remoteOperations={true}
        className="h-[90%]"
        onSelectionChanged={onSelectionChanged}
        hoverStateEnabled={true}
      >
        <LoadPanel 
         enabled={true}
         showIndicator={true}
         text="Loading donors..."
         showPane={true}      
            
        />
        <FilterRow visible={true} applyFilter="onClick" />
        <Selection mode="single" />
        <StateStoring enabled={true} type="localStorage" storageKey={STORAGE_KEY} />
        <Scrolling showScrollbar="always" />

        <Toolbar>
          <Item location="before" widget="dxButton" options={createBtnOptions} />
          <Item location="before" name="applyFilterButton" />
        </Toolbar>

        <Column dataField="DonorId" dataType="number" caption="ID" sortOrder="asc" alignment="left"/>
        <Column dataField="Name" dataType="string" caption="Name"/>
        <Column dataField="City" dataType="string" caption="City"/>
        <Column dataField="ChurchNumber" dataType="number" caption="Church Number" alignment="left"/>
        <Column dataField="AddressCountryCode" dataType="string" caption="Address Country Code"/>
        <Column dataField="StateCode" dataType="string" caption="State Code"/>
        <Column dataField="StateOfficeNumber" dataType="number" caption="State Office Number" alignment="left"/>
        <Column dataField="DonorStatusName" dataType="string" caption="Donor Status Name"/>

        <Paging defaultPageSize={20} />
        <Pager
          visible={true}
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}

        />        
      </DataGrid>

    </div>
  );
};

export default DonorList;
