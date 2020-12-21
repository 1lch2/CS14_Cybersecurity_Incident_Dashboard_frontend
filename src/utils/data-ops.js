/**
 * Get the start and the end index of chartData
 * @param chartData chart data from backend
 * @param event datazoom event
 * @returns {number[]} List with two elements: start and end.
 */
function getStartEnd(chartData, event) {
    const rowNum = chartData.rows.length
    const startIndex = Math.round(rowNum * event.start / 100)
    const endIndex = Math.round(rowNum * event.end / 100)

    return [startIndex, endIndex]
}

/**
 * Get the ISODate format of time for input year and week
 * @param year_week String format, example: "2020/30"
 * @author https://juejin.im/post/6844904006502875143
 * @returns {string} ISODate string
 */
function getISODateTime(year_week) {
    const year = parseInt(year_week.split("/")[0], 10)
    const week = parseInt(year_week.split("/")[1], 10)

    const simple = new Date(year, 0, 1 + (week - 1) * 7);
    const dow = simple.getDay();
    const ISOWeekStart = simple;
    if (dow <= 4)
        ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
    
    const tempStr = ISOWeekStart.toISOString()
    return tempStr.split(".")[0];

}

const dataOps = {getStartEnd, getISODateTime};

export default dataOps;
