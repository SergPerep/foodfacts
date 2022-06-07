const countMealValues = foodList => {
    const proteinTotalNum = foodList.reduce((prev, curr) => prev + curr.total.proteinNum, 0);
    const carbsTotalNum = foodList.reduce((prev, curr) => prev + curr.total.carbsNum, 0);
    const fatTotalNum = foodList.reduce((prev, curr) => prev + curr.total.fatNum, 0);
    const energyTotalNum = foodList.reduce((prev, curr) => prev + curr.total.energyNum, 0);
    return {
        proteinTotalNum,
        carbsTotalNum,
        fatTotalNum,
        energyTotalNum
    }
}

export default countMealValues;