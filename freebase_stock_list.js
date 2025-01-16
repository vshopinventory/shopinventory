//Item Lists
const items={
    king_Crests_Don_Juan_Tabaco_Honey_6mg:{quantity:4, reserved:"N"},
    kings_Crest_Don_Juan_Cafe_6mg:{quantity:3, reserved:"N"},
    kings_Crest_Don_Juan_Bombo_Aldonza_6mg:{quantity:12, reserved:"N"},
    //skwezed Start from here
    skwezed_Mango_Iced_6mg:{quantity:3, reserved:"N"},
    skwezed_Mango_Iced_3mg:{quantity:2, reserved:"N"},
    skwezed_Green_Apple_6mg:{quantity:2, reserved:"N"},
    skwezed_Mixed_Berries_3mg:{quantity:1, reserved:"N"},
    skwezed_Watermelon_Grape_3mg_Iced:{quantity:1, reserved:"N"},
    cream_Team_Butter_Cream_6mg:{quantity:4, reserved:"N"},
    //Daze (Fusion) Start from here
    daze_Fusion_Pineapple_Coconut_Banana_6mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Pineapple_Coconut_Banana_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Pineapple_Mango_Orange_6mg:{quantity:7, reserved:"N"},
    daze_Fusion_Pineapple_Mango_Orange_3mg:{quantity:1, reserved:"N"},
    daze_Fusion_Raspberry_Green_Apple_Watermelon_6mg:{quantity:2, reserved:"N"},
    daze_Fusion_Raspberry_Green_Apple_Watermelon_3mg:{quantity:1, reserved:"N"},
    daze_Fusion_Lemon_Passionfruit_Blueberry_3mg:{quantity:2, reserved:"N"},
    daze_Fusion_Lemon_Passionfruit_Blueberry_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Lemon_Passionfruit_Blueberry_6mg:{quantity:8, reserved:"N"},
    daze_Fusion_Banana_Cantaloupe_Honeydew_6mg_Iced:{quantity:2, reserved:"N"},
    daze_Fusion_Banana_Cantaloupe_Honeydew_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Orange_Yuzu_Tangerine_6mg:{quantity:0, reserved:"N"},
    //Daze (Reds) Start from here
    Reds_Apple_Grape_6mg:{quantity:8, reserved:"N"},
    Reds_Apple_Original_3mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Original_6mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Original_6mg:{quantity:4, reserved:"N"},
    Reds_Apple_Original_3mg:{quantity:1, reserved:"N"},
    Reds_Apple_Berries_6mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Berries_3mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Berries_6mg:{quantity:5, reserved:"N"},
    Reds_Apple_Berries_3mg:{quantity:1, reserved:"N"},
    Reds_Apple_Gold_Kiwi_6mg:{quantity:7, reserved:"N"},
    Reds_Apple_Gold_Kiwi_3mg:{quantity:1, reserved:"N"},
    }

    // Check items Sold Out or Reserved
    Object.keys(items).forEach((key) => {
    const { quantity, reserved } = items[key]; // Destructure properties
    const element = document.getElementById(key); // Get the element
    
    if (element) { // Ensure the element exists
    if (quantity === 0) {
    element.innerHTML = "Sold Out";
    element.style.color = "#ff0000";
    } else if (reserved === "Y") {
    element.innerHTML = "Reserved";
    element.style.color = "#ff0000";
    } else {
    element.innerHTML = quantity;
    }
    }
    });

    //Total Quantity 
    let sum=0;
    Object.values(items).forEach(function (item){
        sum+=item.quantity;
    });
    
    document.getElementById('sum').innerHTML=sum;

    //Update Status
    let date="16/01/2025";
    let time="6:15 PM";
    let updatedProducts=`<strong>Last updated Product(s):</strong>
Kings Crest Don Juan Cafe 6mg`;
    document.getElementById("date").innerHTML=date;
    document.getElementById("time").innerHTML=time;
    document.getElementById('updatedProducts').innerHTML=updatedProducts;
    
    //updated products show for some seconds
    document.addEventListener("DOMContentLoaded", function(){
    let container=document.getElementById('updatedProductsContainer');
    setInterval(()=>{
    container.style.display="block";
    container.classList.remove("hide");
    container.classList.add("show");
    //container.style.display="block";
    
    setTimeout(()=>{
    container.classList.remove("show");
    container.classList.add("hide");
    //container.style.display="none";
    },4000);
    }, 30000);
    
    });
