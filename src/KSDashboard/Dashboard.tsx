import { useNavigate,  Outlet,  } from "react-router-dom";
import { Drawer } from "devextreme-react/drawer";
import TreeView from "devextreme-react/tree-view";
import { DONOR_LIST } from "../Router/routeStrings";

const navigation = [
  {
    id: 1,
    text: "Donor System",
    icon: "home",
    expanded: true,
    items: [
      { id: 11, text: "Donor", icon: "user", path: DONOR_LIST },
    ],
  },
];

const Dashboard = () => {

  return (
    <>
      <Drawer
        component={NavigationMenu}
        opened={true}
        openedStateMode="shrink"
        revealMode="expand"
        position="left"
      >      
          <Outlet />
      </Drawer>
    </>
  );
};


const NavigationMenu = () => {
  const navigate = useNavigate();

  const handleItemClick = (e: any) => {
    if (e.itemData.path) {
      navigate(e.itemData.path);
    }
  };

  return (
    <div style={{ width: "250px" }}>
      <TreeView
        items={navigation}
        displayExpr="text"
        keyExpr="id"
        parentIdExpr="parentId"
        dataStructure="tree"
        onItemClick={handleItemClick}
        selectionMode="single"
        focusStateEnabled={false}
        expandEvent="click"
        expandedExpr="expanded"
        itemRender={(item) => (
          <div className="flex items-center gap-2">
            <i
             className={`dx-icon dx-icon-${item.icon}`} 
             />
            <span>{item.text}</span>
          </div>
        )}
      />
    </div>
  );
};


export default Dashboard;
