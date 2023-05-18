export function unlimitScroll(page, setPage){
  const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  if (scrollPosition === scrollHeight) setPage(page + 1);
}