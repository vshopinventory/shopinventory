//Item Lists
const items={
    king_Crests_Don_Juan_Tabaco_Honey_6mg:{quantity:4, reserved:"N"},
    kings_Crest_Don_Juan_Cafe_6mg:{quantity:2, reserved:"N"},
    kings_Crest_Don_Juan_Bombo_Aldonza_6mg:{quantity:12, reserved:"N"},
    //skwezed Start from here
    skwezed_Mango_Iced_6mg:{quantity:3, reserved:"N"},
    skwezed_Mango_Iced_3mg:{quantity:2, reserved:"N"},
    skwezed_Green_Apple_6mg:{quantity:2, reserved:"N"},
    skwezed_Mixed_Berries_3mg:{quantity:1, reserved:"Y"},
    skwezed_Watermelon_Grape_3mg_Iced:{quantity:1, reserved:"N"},
    //Cream Team Start from here
    cream_Team_Butter_Cream_6mg:{quantity:3, reserved:"N"},
    //Daze (Fusion) Start from here
    daze_Fusion_Pineapple_Coconut_Banana_6mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Pineapple_Coconut_Banana_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Pineapple_Mango_Orange_6mg:{quantity:6, reserved:"N"},
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
    //Bali Fruits Start from here
    bali_Fruits_Watermelon_Kiwi_Strawberry_3mg:{quantity:13, reserved:"N"},
    bali_Fruits_Watermelon_Kiwi_Strawberry_6mg:{quantity:3, reserved:"N"},
    bali_Fruits_Watermelon_Kiwi_Strawberry_3mg_Iced:{quantity:4, reserved:"N"},
    bali_Fruits_Pear_Mango_Guava_6mg:{quantity:27, reserved:"N"},
    bali_Fruits_Pear_Mango_Guava_3mg:{quantity:9, reserved:"N"},
    bali_Fruits_Pear_Mango_Guava_3mg_Iced:{quantity:19, reserved:"N"},
    }
    
    const kc_range=[
    "king_Crests_Don_Juan_Tabaco_Honey_6mg",
    "kings_Crest_Don_Juan_Cafe_6mg",
    "kings_Crest_Don_Juan_Bombo_Aldonza_6mg"
    ];
    const skwezed_range=[
    "skwezed_Mango_Iced_6mg",
    "skwezed_Mango_Iced_3mg",
    "skwezed_Green_Apple_6mg",
    "skwezed_Mixed_Berries_3mg",
    "skwezed_Watermelon_Grape_3mg_Iced"
    ];
    const creamteam_range=[
    "cream_Team_Butter_Cream_6mg"
    ];
    const fusion_range=[
    "daze_Fusion_Pineapple_Coconut_Banana_6mg_Iced",
    "daze_Fusion_Pineapple_Coconut_Banana_3mg_Iced",
    "daze_Fusion_Pineapple_Mango_Orange_6mg",
    "daze_Fusion_Pineapple_Mango_Orange_3mg",
    "daze_Fusion_Raspberry_Green_Apple_Watermelon_6mg",
    "daze_Fusion_Raspberry_Green_Apple_Watermelon_3mg",
    "daze_Fusion_Lemon_Passionfruit_Blueberry_3mg",
    "daze_Fusion_Lemon_Passionfruit_Blueberry_3mg_Iced",
    "daze_Fusion_Lemon_Passionfruit_Blueberry_6mg",
    "daze_Fusion_Banana_Cantaloupe_Honeydew_6mg_Iced",
    "daze_Fusion_Banana_Cantaloupe_Honeydew_3mg_Iced",
    "daze_Fusion_Orange_Yuzu_Tangerine_6mg"
    ];
    const reds_range=[
    "Reds_Apple_Grape_6mg",
    "Reds_Apple_Original_3mg_Iced",
    "Reds_Apple_Original_6mg_Iced",
    "Reds_Apple_Original_6mg",
    "Reds_Apple_Original_3mg",
    "Reds_Apple_Berries_6mg_Iced",
    "Reds_Apple_Berries_3mg_Iced",
    "Reds_Apple_Berries_6mg",
    "Reds_Apple_Berries_3mg",
    "Reds_Apple_Gold_Kiwi_6mg",
    "Reds_Apple_Gold_Kiwi_3mg"
    ];
    const bali_range=[
    "bali_Fruits_Watermelon_Kiwi_Strawberry_3mg",
    "bali_Fruits_Watermelon_Kiwi_Strawberry_6mg",
    "bali_Fruits_Watermelon_Kiwi_Strawberry_3mg_Iced",
    "bali_Fruits_Pear_Mango_Guava_6mg",
    "bali_Fruits_Pear_Mango_Guava_3mg",
    "bali_Fruits_Pear_Mango_Guava_3mg_Iced"
    ];
    //Total KC
    let total_kc=0;
    kc_range.forEach((key)=>{
        if(items[key]){
            total_kc+=items[key].quantity;
        }
    });
    document.getElementById('total_kc').innerHTML=total_kc;
    //Total Skwezed
    let total_skwezed=0;
    skwezed_range.forEach((key)=>{
    if(items[key]){
    total_skwezed+=items[key].quantity;
    }
    });
    document.getElementById('total_skwezed').innerHTML=total_skwezed;
    //Total CreamTeam
    let total_creamteam=0;
    creamteam_range.forEach((key)=>{
    if(items[key]){
    total_creamteam+=items[key].quantity;
    }
    });
    document.getElementById('total_creamteam').innerHTML=total_creamteam;
    //Total Daze (fusion)
    let total_fusion=0;
    fusion_range.forEach((key)=>{
    if(items[key]){ 
    total_fusion+=items[key].quantity;
    }
    });
    document.getElementById('total_fusion').innerHTML=total_fusion;
    //Total Daze (Reds)
    let total_reds=0;
    reds_range.forEach((key)=>{
    if(items[key]){
    total_reds+=items[key].quantity;
    }
    });
    document.getElementById('total_reds').innerHTML=total_reds;
    //Total Bali fruits
    let total_bali=0;
    bali_range.forEach((key)=>{
    if(items[key]){
    total_bali+=items[key].quantity;
    }
    });
    document.getElementById('total_bali').innerHTML=total_bali;

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
    element.style.color = "orange";
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
    let date="17/02/2025";
    let time="7:33 PM";
    let updatedProducts=`<strong>Last updated Product(s):</strong>
Cream Team Butter Cream 6mg/100ml`;
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
