let products=[

    {
        id:1,
        name:"Coke Zero",
        price:40,
        category:"drink",
        quantity:150,
        pic:"https://assets1.canadiangrocer.com/styles/primary_articles_short/s3/2021-07/Coca%20Cola%20Zero%20Sugar%20Can%20655x368.png?itok=38wzMvrH"
    },

    {
        id:2,
        name:"Fanta",
        price:20,
        category:"drink",
        quantity:120,
        pic:"https://assets.stickpng.com/images/580b57fbd9996e24bc43c10f.png"
    },

    {
        id:3,
        name:"Pepsi",
        price:30,
        category:"drink",
        quantity:140,
        pic:"https://i.pinimg.com/originals/81/48/a3/8148a3ecc26b0c02e5e27d46dfa8fdd2.png"
    },

    {
        id:4,
        name:"ACT 2 Pop Corn",
        price:25,
        category:"food",
        quantity:50,
        pic:"https://www.actii.com/sites/g/files/qyyrlu316/files/images/products/homestyle-microwave-popcorn-09433.png"
    },

    {
        id:5,
        name:"Potato Chips",
        price:15,
        category:"food",
        quantity:80,
        pic:"https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png"
    },

    {
        id:6,
        name:"Amul Cheese",
        price:65,
        category:"dairy",
        quantity:30,
        pic:"https://www.cpdubai.com/wp-content/uploads/2018/12/cheese.png"
    },

    {
        id:7,
        name:"Go Cheese",
        price:2,
        category:"dairy",
        quantity:25,
        pic:"https://www.paragmilkfoods.com/images/go/go-wedges.png"
    },

]

function displaydata(arr)

{

    document.getElementById("data").innerHTML="";

    arr.forEach((product,index)=>{

        let row=document.createElement("tr");

        let countTD=document.createElement("td");
        countTD.append(index+1);

        let nameTD=document.createElement("td");
        nameTD.append(product.name);

        let priceTD=document.createElement("td");
        priceTD.append(product.price);

        let categotyTD=document.createElement("td");
        categotyTD.append(product.category);

        let QuantityTD=document.createElement("td");
        QuantityTD.append(product.quantity);

        let picTD=document.createElement("td");
        let propic=document.createElement("img");
        propic.setAttribute("src",product.pic);
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

displaydata(products);


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


let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

function setfilters(property,value){

    if(value!=="")
    {
        filters[property]=value;

        if(property==="minPrice"){

            document.getElementById("maxPrice").min=Number(value)+1;
        }
    }
    else{

        filters[property]=null;
    }

    console.log(filters);
}

function filter(){

    let filteredData=products;

    if(filters.category!==null)
    {

        filteredData=filteredData.filter((product,index)=>{
            
            return product.category.toUpperCase()===filters.category.toUpperCase();
        })
    }

    if(filters.quantity!==null)
    {
         
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.quantity)<=Number(product.quantity);
        })
    }

    if(filters.minPrice!==null)
    {
         
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.minPrice)<=Number(product.price);
        })
    }

    if(filters.maxPrice!==null){

        filteredData=filteredData.filter((product,index) => {

            return Number(filters.maxPrice)>=Number(product.price);
        })
    }

    displaydata(filteredData);
}