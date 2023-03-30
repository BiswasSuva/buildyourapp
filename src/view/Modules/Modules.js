import React, { useState, useEffect, useMemo } from "react";
import ModuleCard from "./ModuleCard";
import ModulesUi from "../../Component/ModulesUi/ModulesUi";
import ModuleBtn from "../../Component/ModulesUi/ModuleBtn";
import ModuleWrapper from "../../Component/ModulesUi/ModuleWrapper";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "react-uuid";
import { getAppModule } from "../../api/appApi";
import ThemeCard from "./ThemeCard";
import { getTheme } from "../../api/appApi";
import { async } from "q";
import { useSelector } from "react-redux";
import { changeModulePriority } from "../../api/appApi";
import { useNavigate } from "react-router";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { fetchuser, removeUserdata } from "../../redux/reducers/User";
import { updateUserDetail } from "../../api/authapi";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const columnsForModules = {
  [uuid()]: {
    name: "Recommended modules for you",
    items: [],
  },
  [uuid()]: {
    name: "More Menu",
    items: [],
  },
  [uuid()]: {
    name: "Other Modules",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  // // console.log("result", result);
  let findOtherModuleId = Object.keys(columns);
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    // // console.log("se", destColumn);
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    if (
      destColumn.name === "Recommended modules for you" &&
      destColumn.items.length === 4
    ) {
      // alert("")
      const [removed] = sourceItems.splice(source.index, 1);
      const [removedLastItem] = destItems.splice(sourceItems.lastIndexOf(), 1);
      destItems.splice(destination.index, 0, removed);
      sourceItems.splice(source.index, 0, removedLastItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
function Modules() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.User);
  const [coloumns, setColomns] = useState(columnsForModules);
  const [allTheme, setAllTheme] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppModule();
  }, []);

  const fetchAppModule = async () => {
    let result = await getAppModule();
    console.log("appModule", result);
    // setItems(result.data);
    if (result && result.status) {
      // theme fetching according to module
      themeFetch(result.data);
      // this if checking all module have selectedStatus true if all have false then our ai make default modules for you
      if (result.data.filter((item) => item.selectedStatus).length > 0) {
        const recomandedFilter = result.data.filter(
          (item) => item.selectedStatus && item.moduleID?.tabStatus
        );
        // console.log("recomm",recomandedFilter)
        // return false
        recomandedFilter.sort(
          (firstItem, secondItem) =>
            firstItem.moduleID.priority - secondItem.moduleID.priority
        );
        const moreFilter = result.data.filter(
          (item) => item.selectedStatus && !item.moduleID?.tabStatus
        );
        const otherFilter = result.data.filter((item) => !item.selectedStatus);
        // // console.log(coloumns);
        let find = Object.keys(coloumns);
        const recomUpdated = coloumns[find[0]];
        recomUpdated.items = recomandedFilter;
        const moreUpdated = coloumns[find[1]];
        moreUpdated.items = moreFilter;
        const otherUpdated = coloumns[find[2]];
        otherUpdated.items = otherFilter;

        setColomns({
          ...coloumns,
          [find[0]]: {
            ...recomUpdated,
          },
          [find[1]]: {
            ...moreUpdated,
          },
          [find[2]]: {
            ...otherUpdated,
          },
        });
      } else {
        const recomandedArray = result.data.filter(
          (item) => item.moduleName == "Social" || item.moduleName == "E-Store"
        );
        const moreArray = result.data.filter(
          (item) => item.moduleName != "Social" && item.moduleName != "E-Store"
        );

        let find = Object.keys(coloumns);
        const recomUpdated = coloumns[find[0]];
        recomUpdated.items = recomandedArray;
        const moreUpdated = coloumns[find[1]];
        moreUpdated.items = moreArray;
        // const otherUpdated = coloumns[find[2]];
        // otherUpdated.items = otherFilter;
        setColomns({
          ...coloumns,
          [find[0]]: {
            ...recomUpdated,
          },
          [find[1]]: {
            ...moreUpdated,
          },
        });
      }
    }
  };

  const themeFetch = async (module) => {
    // // console.log("module", module);
    for (const element of module) {
      // // // console.log("element",element);
      let result = await getTheme(element._id);
      // // console.log("themeresult", result);
      if (result && result.status) {
        let updated = {
          ...element,
          theme: result.data,
        };
        // // console.log("updated", updated);
        setAllTheme((prev) => [...prev, updated]);
        let selected;
        if (element.moduleID?.themeID) {
          let objTheme = result.data.find(
            (item) => item._id == element.moduleID.themeID
          );
          selected = {
            moduleId: element._id,
            theme: objTheme,
          };
        } else {
          selected = {
            moduleId: element._id,
            theme: result.data[0],
          };
        }

        // setSelectedTheme((prev) => [...prev, selected]);
      }
    }
  };

  const changeChecked = (val, path, item, index, id) => {
    let findOtherModuleId = Object.keys(coloumns);
    const sourceColumn = coloumns[id];
    const sourceItems = [...sourceColumn.items];

    // // // console.log( findOtherModuleId[2]);
    // // // console.log(coloumns[id].items.length);
    if (path === "Recommended modules for you") {
      // // // console.log("source",sourceColumn);
      const destColumn = coloumns[findOtherModuleId[2]];
      // // // console.log("desti",destColumn);

      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(index, 1);
      destItems.splice(1, 0, removed);
      const moreMenuColumn = coloumns[findOtherModuleId[1]];
      // // // console.log("more", moreMenuColumn);
      if (moreMenuColumn.items.length > 0) {
        const moreMenuItem = [...moreMenuColumn.items];
        const [removedfromMoreMenu] = moreMenuItem.splice(0, 1);
        sourceItems.splice(1, 0, removedfromMoreMenu);
        setColomns({
          ...coloumns,
          [id]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [findOtherModuleId[2]]: {
            ...destColumn,
            items: destItems,
          },
          [findOtherModuleId[1]]: {
            ...moreMenuColumn,
            items: moreMenuItem,
          },
        });
      } else {
        setColomns({
          ...coloumns,
          [id]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [findOtherModuleId[2]]: {
            ...destColumn,
            items: destItems,
          },
        });
      }
    }
    if (path === "Other Modules") {
      if (coloumns[findOtherModuleId[0]].items.length < 4) {
        const destColumn = coloumns[findOtherModuleId[0]];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(index, 1);
        destItems.splice(1, 0, removed);
        setColomns({
          ...coloumns,
          [id]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [findOtherModuleId[0]]: {
            ...destColumn,
            items: destItems,
          },
        });
      } else {
        // alert("")
        const destColumn = coloumns[findOtherModuleId[1]];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(index, 1);
        destItems.splice(1, 0, removed);
        setColomns({
          ...coloumns,
          [id]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [findOtherModuleId[1]]: {
            ...destColumn,
            items: destItems,
          },
        });
      }
    }
    if (path == "More Menu") {
      const destColumn = coloumns[findOtherModuleId[2]];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(index, 1);
      destItems.splice(1, 0, removed);
      setColomns({
        ...coloumns,
        [id]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [findOtherModuleId[2]]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  const themes = useMemo(() => {
    return findTheme();
  }, [coloumns, allTheme]);

  function findTheme() {
    let findModule = Object.keys(coloumns);
    let themeModule = [
      ...coloumns[findModule[0]].items,
      ...coloumns[findModule[1]].items,
    ];
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }
    let arr = [];
    let selectedTheme = [];

    themeModule.forEach((element) => {
      if (allTheme.find((item) => item._id == element._id)) {
        let obj = allTheme.find((item) => item._id == element._id);
        arr.push(obj);
        // // // console.log("obk",obj);
        let selected;
        if (element.moduleID?.themeID) {
          let objTheme = obj.theme.find(
            (item) => item._id == element.moduleID.themeID
          );
          selected = {
            moduleId: element._id,
            theme: objTheme,
          };
        } else {
          selected = {
            moduleId: element._id,
            theme: obj.theme[0],
          };
        }
        selectedTheme.push(selected);
        // setSelectedTheme((prev) => [...prev, selected]);
      }
    });
    setSelectedTheme(selectedTheme);

    return arr;
  }

  const Submit = async () => {
    let arr = [];
    for (const key in coloumns) {
      const element = coloumns[key];
      console.log(element);
      if (element.name !== "Other Modules") arr.push(...element.items);
    }
    // console.log("x", coloumns);
    // const user = reactLocalStorage.getObject("userData")
    let dataSend = arr.map((item, index) => {
      return {
        appID: userData._id,
        moduleID: item._id,
        priority: index + 1,
        tabStatus: index <= 3 ? true : false,
        themeID: selectedTheme.find((i) => i.moduleId == item._id)?.theme?._id,
      };
    });
    // console.log("sss", dataSend);
    // return false;
    let result = await changeModulePriority(dataSend);
    // // console.log(result);
    // return false
    if (result && result.status) {
      let data = {
        nextURL: "/dashboard",
      };
      // // // console.log(id);
      let res = await updateUserDetail(data);
      if (res && res.status) {
       const tut= reactLocalStorage.get("tutorial")



        toast.success( !tut?"Module changes done as you want":"Now you are able to customize your app", {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })

        navigate("/logo");

        // Swal.fire({
        //   title: "Thank You!",
        //   // text: 'Do you want to continue',
        //   icon: "success",
        //   confirmButtonText: "Customize Your App  -->",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     navigate("/logo");
        //   }
        // });
      } else {
        toast.error("something error");
      }
      // alert("Selected successfully");
    } else {
      toast.error("server error");
    }
  };

  const redirectToHome = () => {
    reactLocalStorage.remove("token");
    dispatch(removeUserdata());
    navigate("/");
  };

  return (
    <ModulesUi>
      <div className="col-md-3 col-xl-3 col-lg-3 col-12">
        <div className="app-modules-recommanded-wrap custom-drag hide-scrollbar">
          <i className="fa-solid fa-arrow-left" onClick={redirectToHome}></i>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, coloumns, setColomns)}
          >
            {Object.entries(coloumns).map(([id, column]) => {
              return (
                <Droppable droppableId={id}>
                  {(provided, snapshot) => {
                    return (
                      <ModuleWrapper
                        provided={provided}
                        wrapperName={column.name}
                      >
                       
                        {column.items.map((item, i) => {
                         
                          return (
                            <Draggable
                            isDragDisabled={item.moduleName =="Social"}
                              key={item._id}
                              draggableId={item._id}
                              index={i}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <ModuleCard
                                    provided={provided}
                                    name={item.moduleName}
                                    icon={item.moduleImage}
                                    homeIcon={
                                      column.name ===
                                        "Recommended modules for you"
                                        ? true
                                        : false
                                    }
                                    checked={
                                      column.name ===
                                        "Recommended modules for you" ||
                                        column.name === "More Menu"
                                        ? true
                                        : false
                                    }
                                    onCheckChange={(val) => {
                                      if (item.moduleName !== "Social") {
                                        changeChecked(
                                          val,
                                          column.name,
                                          item,
                                          i,
                                          id
                                        );
                                      }
                                    }}
                                  />
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </ModuleWrapper>
                    );
                  }}
                </Droppable>
              );
            })}
          </DragDropContext>

          <ModuleBtn name="Confirm" onClick={Submit} />
        </div>
      </div>
      <div className="col-md-9 col-xl-9 col-lg-9 col-12">
        <div className="row">
          {themes.map((item, index) => {
            if (item.moduleName != "Social"){
              return (
                <ThemeCard
                  key={index}
                  selectTheme={(data, id) => {
                    // // console.log(selectedTheme);
                    let updatedTheme = selectedTheme.filter(
                      (item) => item.moduleId !== id
                    );
                    let dataEdit = {
                      moduleId: id,
                      theme: data,
                    };
                    setSelectedTheme([...updatedTheme, dataEdit]);
                  }}
                  themeData={item}
                />
              );
            }
             
          })}
        </div>
      </div>
    </ModulesUi>
  );
}

export default Modules;
