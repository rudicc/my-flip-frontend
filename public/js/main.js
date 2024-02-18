// Closing components
const closeComponents = (type, event, variables) => {

    const target = type === "dropdown" ? event.target.closest(`.${variables.menu}`) || event.target.closest(`[${variables.target}]`) : event.target.closest(`.${variables.menu}`) || event.target.closest(`.${variables.target}`)
  
    if (target) return
  
    variables.components.forEach(comp => {
      const menu = comp.querySelector(`.${variables.menu}`)
      if (menu.classList.contains(variables.active)) menu.classList.remove(variables.active)
    })
  
  }
  
const dropdown = () => {
    const _variables = {
      main: "e-dropdown",
      menu: "e-dropdown__menu",
      target: "data-dropdown-target",
      active: "e-active",
      components: [...document.querySelectorAll(`.e-dropdown`)]
    }
  
    document.addEventListener("click", (e) => {
  
      const target = e.target.closest(`.${_variables.main}`)
  
      const targetedMenu = e.target.closest(`.${_variables.menu}`)
  
      if (!target || targetedMenu) return
  
      e.preventDefault()
  
      operateNavigations("dropdown", target, _variables);
  
    })
  
    window.addEventListener("mouseup", e => {
  
      closeComponents("dropdown", e, _variables);
  
    })
  
  }
  
  const operateNavigations = (type, target, variables) => {

    let componentId = type === "dropdown" ? variables.target : variables.targetId;
  
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

  dropdown()