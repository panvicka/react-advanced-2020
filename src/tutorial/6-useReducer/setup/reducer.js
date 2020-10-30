// reducer function
export const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const newItem = [...state.people, action.payload];
      return {
        ...state,
        people: newItem,
        isModalOpen: true,
        modalContent: "item added",
      };
    }
    if (action.type === "NO_VALUE") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "No value",
      };
    }
  
    if (action.type === "CLOSE_MODAL") {
      return {
        ...state,
        isModalOpen: false,
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      const newPeople = state.people.filter((person) => person.id !== action.payload);
      return {
        ...state,
        people: newPeople,
      };
    }
  
    throw new Error("no matchin action type");
  };