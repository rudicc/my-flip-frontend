const CURRENCY_FORMATTER_USD = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })
  
  const CURRENCY_FORMATTER_THD = new Intl.NumberFormat(undefined, {
    currency: "THD",
    style: "currency",
  })

  export function formatCurrencyUSD(number: number) {
    return CURRENCY_FORMATTER_USD.format(number)
  }

  export function formatCurrencyTHD(number: number) {
    return CURRENCY_FORMATTER_THD.format(number)
  }


  export function GetDateNow(){
    return  formatDate()
  }
  
export const formatDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const subStrings =( values:string , vstart:number , vend:number ) =>{
  return values.substring(vstart,vend)
}



///
export const closeComponents = (type, event, variables) => {

  const target = type === "dropdown" ? event.target.closest(`.${variables.menu}`) || event.target.closest(`[${variables.target}]`) : event.target.closest(`.${variables.menu}`) || event.target.closest(`.${variables.target}`)

  if (target) return

  variables.components.forEach(comp => {
    const menu = comp.querySelector(`.${variables.menu}`)
    if (menu.classList.contains(variables.active)) menu.classList.remove(variables.active)
  })

}

export const operateNavigations = (type, target, variables) => {

  let componentId = type === "dropdown" ? variables.target : "notifications";

  const targetId = type === "dropdown" ? target.querySelector(`[${componentId}]`).getAttribute(componentId) : target.getAttribute(componentId)

  const activeMenu = document.querySelector(`#${targetId}`)

  const nonTargeted = variables.components.map(drop => {
    const nonActiveId = drop.querySelector(`[${componentId}]`).getAttribute(componentId)
    const nonActive = document.querySelector(`#${nonActiveId}`)

    return nonActive
  })

  const filterExceptActive = nonTargeted.filter(target => target !== activeMenu)

  filterExceptActive.forEach(drop => drop.classList.remove(variables.active))

  if (activeMenu) activeMenu.classList.toggle(variables.active)

}

