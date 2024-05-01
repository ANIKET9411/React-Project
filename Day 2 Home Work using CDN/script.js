let main=document.querySelector(".main");
let main_inner=React.createElement("div",{class:"main_inner"},[
    React.createElement("h1",null,"Topics Covered"),
    React.createElement("p",null,"The following is the list of all the topics we cover in the MDN learning area."),
    React.createElement("a",{href:"#"},"Getting Started with the web"),
    React.createElement("p",{class:"para"},"Provides the practical introduction to web development for complete beginners."),
    React.createElement("a",{href:"#"},"HTML structuring the web"),
    React.createElement("p",{class:"para"},"HTML is the language that we use to structure the different part of the content and define what their meaning or purpose is.This topic teaches HTML in detail."),
    React.createElement("a",{href:"#"},"CSS-- Styling the web"),
    React.createElement("p",{class:"para"},"CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animations.This topic provides comprehensive coverage of CSS."),]);
ReactDOM.render(main_inner,main);