let products=[

    {
        id:1,
        Name:"Coke Zero",
        Price:40,
        Category:"drink",
        Quantity:150,
        Pic:"https://assets1.canadiangrocer.com/styles/primary_articles_short/s3/2021-07/Coca%20Cola%20Zero%20Sugar%20Can%20655x368.png?itok=38wzMvrH"
    },

    {
        id:2,
        Name:"Fanta",
        Price:20,
        Category:"drink",
        Quantity:120,
        Pic:"https://assets.stickpng.com/images/580b57fbd9996e24bc43c10f.png"
    },

    {
        id:3,
        Name:"Pepsi",
        Price:30,
        Category:"drink",
        Quantity:140,
        Pic:"https://i.pinimg.com/originals/81/48/a3/8148a3ecc26b0c02e5e27d46dfa8fdd2.png"
    },

    {
        id:4,
        Name:"ACT 2 Pop Corn",
        Price:25,
        Category:"food",
        Quantity:50,
        Pic:"https://www.actii.com/sites/g/files/qyyrlu316/files/images/products/homestyle-microwave-popcorn-09433.png"
    },

    {
        id:5,
        Name:"Potato Chips",
        Price:15,
        Category:"food",
        Quantity:80,
        Pic:"https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png"
    },

    {
        id:6,
        Name:"Amul Cheese",
        Price:65,
        Category:"dairy",
        Quantity:30,
        Pic:"https://www.cpdubai.com/wp-content/uploads/2018/12/cheese.png"
    },

    {
        id:7,
        Name:"Go Cheese",
        Price:2,
        Category:"drink",
        Quantity:25,
        Pic:"https://www.paragmilkfoods.com/images/go/go-wedges.png"
    },

]

function displaydata()

{

    products.forEach((product,index)=>{

        let row=document.createElement("tr");

        let countTD=document.createElement("td");
        countTD.append(index+1);

        let nameTD=document.createElement("td");
        nameTD.append(product.Name);

        let priceTD=document.createElement("td");
        priceTD.append(product.Price);

        let categotyTD=document.createElement("td");
        categotyTD.append(product.Category);

        let QuantityTD=document.createElement("td");
        QuantityTD.append(product.Quantity);

        let picTD=document.createElement("td");
        let propic=document.createElement("img");
        propic.setAttribute("src",product.Pic);
        picTD.appendChild(propic);

        row.appendChild(countTD);
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categotyTD);
        row.appendChild(QuantityTD);
        row.appendChild(picTD);

        document.getElementById("data").append(row);

    })
}

displaydata();


let filterstatus=false;
function filterdisplay(){

    if(filterstatus===false){

        document.getElementById("filter_box").style.marginLeft="0px";
        filterstatus=true;
    }
    else{

        document.getElementById("filter_box").style.marginLeft="-30%";
        filterstatus=false
    }

}