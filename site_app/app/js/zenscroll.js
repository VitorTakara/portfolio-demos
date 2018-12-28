function goTo(section){
    let section_ = document.querySelector("." + section) // Seleciona elemento no DOM
    zenscroll.toY(zenscroll.getTopOf(section_) - 90, 1000) // Vai até o elemento selecionado e -90px
}