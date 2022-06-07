
import createAddFoodButtonView from "./MealList/addFoodButtonView.js";
import createEditView from "./MealList/editView.js";
import createTotalView from "./MealList/totalView.js";
import createFoodListView from "./MealList/foodListView.js";
import createSearchView from "./Search/searchView.js";
import debounce from "../utils/debounce.js";
import countTotalValue from "../utils/countTotalValue.js";

function createHomeView() {
  const root = document.createElement('div');
  root.innerHTML = String.raw`
    <main class="container">
      <h1>The meal</h1>
      <div id="meal-list">
        <div id="add-food-button-container"></div>
        <div id="edit-container"></div>
        <div id="food-list-container"></div>
        <div id="total-container"></div>
      </div>
    </main>
    <div id="search-container"></div>
  `;

  const searchContainer = root.querySelector("#search-container");
  const editContainer = root.querySelector("#edit-container");
  const addFoodButtonContainer = root.querySelector("#add-food-button-container");
  const foodListContainer = root.querySelector("#food-list-container");
  const totalContainer = root.querySelector("#total-container");

  let foodList = [
    {
      id: 1,
      titleStr: "White rice",
      amountNum: 240,
      per100: {
        proteinNum: 4,
        carbsNum: 21,
        fatNum: 43,
        energyNum: 140
      },
      total: {
        proteinNum: 4 * 240 / 100,
        carbsNum: 21 * 240 / 100,
        fatNum: 43 * 240 / 100,
        energyNum: 149 * 240 / 100
      }
    },
    {
      id: 2,
      titleStr: "Chocomel",
      amountNum: 150,
      per100: {
        proteinNum: 23,
        carbsNum: 34,
        fatNum: 12,
        energyNum: 200,
      },
      total: {
        proteinNum: 23 * 150 / 100,
        carbsNum: 34 * 150 / 100,
        fatNum: 12 * 150 / 100,
        energyNum: 200 * 150 / 100,
      }
    }
  ];

  /*======= ADD FOOD BUTTON ======*/

  const onAddFoodButtonClick = () => {
    setIsSearchOpen(true);
    setIsAddFoodButtonVisible(false);
  }

  const addFoodButton = createAddFoodButtonView({ onAddFoodButtonClick });

  const setIsAddFoodButtonVisible = (bool) => {
    if (!bool) return addFoodButtonContainer.innerHTML = "";
    addFoodButtonContainer.appendChild(addFoodButton.root);
  }

  addFoodButtonContainer.appendChild(addFoodButton.root);

  /*======= FOOD LIST ======*/

  const foodListView = createFoodListView({ foodList, onDeleteFoodButtonClick });
  foodListContainer.appendChild(foodListView.root);

  const deleteFood = (foodId) => {
    foodList = foodList.filter(food => food.id !== foodId);
    foodListView.update({ foodList, onDeleteFoodButtonClick });
    totalView.update({ foodList });
  }

  function onDeleteFoodButtonClick(foodId) {
    deleteFood(foodId);
  }

  /*======= TOTAL =======*/
  const totalView = createTotalView({ foodList });
  totalContainer.appendChild(totalView.root);

  /*======= EDIT =======*/
  let selectedResult;
  let selectedAmountNum;

  const setIsEditOpen = (bool) => {
    if (!bool) return editContainer.innerHTML = "";
  }

  const onEditCancelClick = () => {
    setIsEditOpen(false);
    setIsAddFoodButtonVisible(true);
  }

  const addFoodToTheList = (selectedAmountNum, selectedResult) => {
    const food = {
      id: selectedResult.id,
      titleStr: selectedResult.titleStr,
      amountNum: selectedAmountNum,
      per100: {
        proteinNum: selectedResult.proteinNum,
        carbsNum: selectedResult.carbsNum,
        fatNum: selectedResult.fatNum,
        energyNum: selectedResult.energyNum
      },
      total: {
        proteinNum: countTotalValue(selectedResult.proteinNum, selectedAmountNum),
        carbsNum: countTotalValue(selectedResult.carbsNum, selectedAmountNum),
        fatNum: countTotalValue(selectedResult.fatNum, selectedAmountNum),
        energyNum: countTotalValue(selectedResult.energyNum, selectedAmountNum)
      }
    };
    foodList = [food, ...foodList];
  }

  const onEditSaveClick = () => {
    addFoodToTheList(selectedAmountNum, selectedResult);
    foodListView.update({ foodList });
    totalView.update({ foodList });
    console.log({ foodList });
    setIsEditOpen(false);
    setIsAddFoodButtonVisible(true);
  }

  const onEditInput = (e) => {
    selectedAmountNum = parseFloat(e.target.value);

    const {
      proteinNum,
      carbsNum,
      fatNum,
      energyNum
    } = selectedResult;

    const foodValues = {
      proteinNum: proteinNum * selectedAmountNum / 100 || 0,
      carbsNum: carbsNum * selectedAmountNum / 100 || 0,
      fatNum: fatNum * selectedAmountNum / 100 || 0,
      energyNum: energyNum * selectedAmountNum / 100 || 0
    };

    return foodValues;
  }
  /*======= SEARCH =======*/

  let isSearchOpen = false;

  // const logDebounce = debounce(message => console.log(message));
  // const onInputChange = async (e) => {
  //     state.searchResult = await getSearchResults({ searchInputValue: e.target.value });
  //     console.log(state);
  // }

  const onResultClick = (result) => {
    selectedResult = result;
    setIsSearchOpen(false);
    const editView = createEditView({
      result: selectedResult,
      onEditInput,
      onEditCancelClick,
      onEditSaveClick
    });
    editContainer.appendChild(editView.root);
  }

  const onOverlayClick = () => {
    setIsSearchOpen(false);
    setIsAddFoodButtonVisible(true);
  }

  const searchView = createSearchView({ onResultClick, onOverlayClick });

  if (isSearchOpen) searchContainer.appendChild(searchView.root);

  function setIsSearchOpen(bool) {
    if (!bool) return searchContainer.innerHTML = "";
    searchContainer.appendChild(searchView.root);
  };

  return { root };
}

export default createHomeView;
