export function localStorageLogic(e, eachData) {
  if (e.target.src === `http://localhost:3000/bookmark-on.png`) {
    let bookmark = JSON.parse(localStorage.getItem("bookmark"));
    bookmark = bookmark.filter((el) => el !== eachData.id);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  } else {
    let bookmark = localStorage.getItem("bookmark");
    if (bookmark === null)
      localStorage.setItem("bookmark", JSON.stringify([eachData.id]));
    else {
      bookmark = JSON.parse(bookmark);
      bookmark.push(eachData.id);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
  }
}
