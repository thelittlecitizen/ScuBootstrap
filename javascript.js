

const array_Instruments = [{
    description:"חליל יפה",
    id: 3,
    imagePath: "download2.jpg",
    instrumentsOrders:null,
    instrumentsType: {id:1, name:"כלי נשיפה"},
    name:"חליל",
    price: 50,
    typeId:1
},
{
    description:"מפוחית יפה",
    id: 2,
    imagePath: "download1.jpg",
    instrumentsOrders:null,
    instrumentsType: {id:1, name:"כלי נשיפה"},
    name:"מפוחית",
    price: 35,
    typeId:1  
},
{
    description:"חצוצרה ארוכה ",
    id: 1,
    imagePath: "download.jpg",
    instrumentsOrders:null,
    instrumentsType: {id:1, name:"כלי נשיפה"},
    name:"חצוצרה",
    price: 1500,
    typeId:1  
},
{
    description:"טרומבון קטן",
    id: 6,
    imagePath: "download4.jpg",
    instrumentsOrders:null,
    instrumentsType: {id:1, name:"כלי נשיפה"},
    name:"טרומבון",
    price: 2400,
    typeId:1  
},
{
    description:" קלרינט רועש",
    id: 5,
    imagePath: "download3.jpg",
    instrumentsOrders:null,
    instrumentsType: {id:1, name:"כלי נשיפה"},
    name:"קלרינט",
    price: 1400,
    typeId:1  
},
{
    description:"כינור קטן ",
    id: 4,
    imagePath: null,
    instrumentsOrders:null,
    instrumentsType: {id:2, name:"כלי מיתר"},
    name:"כינור2",
    price: 2300,
    typeId:1  
}

]

function Data()
{
    for (var i= 0; i<array_Instruments.length; i++)
    {
    var div = document.getElementsByClassName("row")[2]
    var div1 = document.createElement ("div")
    div1.className="col-md-4 text-center border rounded"
    div.appendChild(div1)

    var img = document.createElement("img")
    img.src = array_Instruments[i].imagePath
    img.alt="לא קיימת תמונה"
    div1.appendChild(img)

    var title= document.createElement("h3")
    title.innerText= array_Instruments[i].name
    div1.appendChild(title)
    
    var text = document.createElement("span")
    text.innerText = array_Instruments[i].description
    div1.appendChild(text)

    var price = document.createElement("h3")
    price.innerText = array_Instruments[i].price
    div1.appendChild(price)

    var agala = document.createElement("button")
    agala.innerText = "הוספה לעגלה"
    div1.appendChild(agala)
    }

}
Data();

function SortType(type)
{
    for(var i = 0; i<array_Instruments.length; i++)
    {

            document.getElementsByClassName("col-md-4 text-center border rounded")[i].style.display = 'unset'


    }
    for(var i = 0; i<array_Instruments.length; i++)
    {
        if(array_Instruments[i].instrumentsType.name != type)
        {
            document.getElementsByClassName("col-md-4 text-center border rounded")[i].style.display = 'none'

        }
        if(type == "הכל")
        {
            document.getElementsByClassName("col-md-4 text-center border rounded")[i].style.display = 'unset'

        }
    
    



    }

}
